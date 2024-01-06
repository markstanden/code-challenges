/// <reference path="./global.d.ts" />
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import {Untranslatable} from "./errors";

export class TranslationService {
    /**
     * Creates a new service
     * @param {ExternalApi} api the original api
     */
    constructor(api) {
        this.api = api;
    }

    /**
     * Attempts to retrieve the translation for the given text.
     *
     * - Returns whichever translation can be retrieved, regardless the quality
     * - Forwards any error from the translation api
     *
     * @param {string} text
     * @returns {Promise<string>}
     */
    free(text) {
        return new Promise((resolve, reject) => {
            this.api.fetch(text)
                .then(result => resolve(result.translation))
                .catch(error => reject(error))
        })
    }


    /**
     * Batch translates the given texts using the free service.
     *
     * - Resolves all the translations (in the same order), if they all succeed
     * - Rejects with the first error that is encountered
     * - Rejects with a BatchIsEmpty error if no texts are given
     *
     * @param {string[]} texts
     * @returns {Promise<string[]>}
     */
    batch(texts) {
        /**
         * Provide a list of strings to translate,
         * getAllTranslations translates all using the free service.
         * @param {String[]} toTranslate
         * @returns {Promise<Awaited<string>[]>}
         */
        const getAllTranslations = (toTranslate) =>
            Promise.all(toTranslate.map(text => this.free(text))
            )

        return new Promise((resolve, reject) => {
            if (texts.length === 0) {
                reject(new BatchIsEmpty())
            }

            getAllTranslations(texts)
                .then(translated => resolve(translated))
                .catch(error => reject(error))
        })
    }

    /**
     * Requests the service for some text to be translated.
     *
     * Note: the request service is flaky, and it may take up to three times for
     *       it to accept the request.
     *
     * @param {string} text
     * @returns {Promise<void>}
     */
    request(text) {
        const MAX_ATTEMPTS_AGAINST_API = 3
        let count = 1

        const makeRequest = (toTranslate) => {
            return new Promise((resolve, reject) => {
                this.api.request(toTranslate, error => {
                    if (error === undefined) {
                        resolve()
                    } else {
                        reject(new Untranslatable())
                    }
                })
            }).catch(error => {
                if (count++ < MAX_ATTEMPTS_AGAINST_API) {
                    return makeRequest(toTranslate)
                } else {
                    throw error
                }
            })
        }
        return makeRequest(text)
    }

    /**
     * Higher order function that returns a function that resolves a high quality translation or
     * rejects a translation below the required threshold.
     * @param {number} minimumQuality
     * @param {function(string):void} resolve
     * @param {function(any?):void} reject
     * @returns {(function(Translation): void)|*}
     */
    qualityCheck = (minimumQuality, resolve, reject) => (response) => {
        if (response.quality >= minimumQuality) {
            resolve(response.translation)
        } else {
            reject(new QualityThresholdNotMet(`Got ${response.quality}%, needed ${minimumQuality}%`))
        }
    }

    /**
     * Retrieves the translation for the given text
     *
     * - Rejects with an error if the quality can not be met
     * - Requests a translation if the translation is not available, then retries
     *
     * @param {string} text
     * @param {number} minimumQuality
     * @returns {Promise<string>}
     */
    premium(text, minimumQuality) {
        return new Promise((resolve, reject) => {
                this.api.fetch(text)
                    .then(this.qualityCheck(minimumQuality, resolve, reject))
                    .catch(() => {
                        // Presumably unavailable
                        // Hammer their systems until the translation is done
                        this.request(text)
                            .then(() => this.api.fetch(text)
                                .then(this.qualityCheck(minimumQuality, resolve, reject))
                            ).catch(error => reject(error))
                    })
            }
        )
    }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet
    extends Error {
    /**
     * @param {string} text
     */
    constructor(text) {
        super(`
The translation of ${text} does not meet the requested quality threshold.
    `.trim());

        this.text = text;
    }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
    constructor() {
        super(`
Requested a batch translation, but there are no texts in the batch.
    `.trim());
    }
}
