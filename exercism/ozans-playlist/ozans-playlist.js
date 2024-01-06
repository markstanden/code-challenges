// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
    return [...new Set(playlist)]
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
    const playlistSet = new Set(playlist)
    return playlistSet.has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
    const playlistSet = new Set(playlist)
    return [...playlistSet.add(track)]
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
    const playlistSet = new Set(playlist)
    playlistSet.delete(track)
    return [...playlistSet]
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
    /**
     * Function to extract the artist name from a track description
     * string in the form of "<SONG> - <ARTIST>"
     * @type {function(string): string}
     */
    const getArtist = (trackName => trackName.split(" - ").at(-1))

    /**
     * A list of all the artists within a playlist.
     * May contain duplicates.
     * @type {string[]}
     */
    const artistList = playlist.map(getArtist)
    return [...new Set(artistList)]
}
