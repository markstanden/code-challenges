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
    // create a shallow clone of the branch
    return {
        ...target,
        ...Object.keys(toMerge)
            .map((key) => {
                let res = toMerge[key];
                // iterate the keys of the merge branch
                if (target.hasOwnProperty(key)) {
                    // existing branch already has this key

                    if (typeof target[key] === 'object') {
                        // and it is an Object, so may have internal branches
                        res = objectMerge(target[key], toMerge[key]);

                    } else {
                        // not an object, so update the value
                        res = toMerge[key];
                    }

                }
                    // res does not have the key yet
                    return {[key]: res};
            }).at(0)
    }
}

module.exports = {objectMerge};