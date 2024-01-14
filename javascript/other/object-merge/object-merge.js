/*
 * Needed a function at work that could merge (update/overwrite)
 * a new config object into an existing config object,
 * without destroying data in the existing object.
 * as I was only overwriting a few fields, didn't make sense to duplicate the entire
 * object.
 *
 * Sounded like an interesting problem to solve.
 */

/**
 * Returns a copy of the supplied target object with only
 * the supplied keys/values in the merge object altered/added
 * does not remove data from the original unless overwritten.
 * @param {object} target
 * @param {object} toMerge
 * @return {object}
 */
function objectMerge(target, toMerge) {
    return merge(target ?? {}, toMerge ?? {})

    /**
     * Merges an object into another object
     * @param existingBranch
     * @param mergeBranch
     * @return {object}
     */
    function merge(existingBranch, mergeBranch) {
        return {
            ...existingBranch,
            ...Object.keys(mergeBranch)
                .map(key =>
                        (existingBranch.hasOwnProperty(key) && typeof existingBranch[key] === 'object')
                            ? {[key]: objectMerge(existingBranch[key], mergeBranch[key])}
                            : {[key]: mergeBranch[key]}

                ).reduce((obj, branch) => ({...obj, ...branch}), {})
        };
    }


}

module.exports = {objectMerge};