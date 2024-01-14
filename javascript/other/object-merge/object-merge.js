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
    // prevent easy error conditions
    const existingBranch = target ?? {};
    const mergeBranch = toMerge ?? {};

    // create a shallow clone of the branch
    return {
        ...existingBranch,

        // create updated object branches as required,
        // and spread into (overwriting) existing top level object branches
        ...Object.keys(mergeBranch)
            .map((key) => {
                let res = mergeBranch[key];
                // iterate the keys of the merge branch
                if (existingBranch.hasOwnProperty(key)) {
                    // existing branch already has this key
                    if (typeof existingBranch[key] === 'object') {
                        // and it is an Object, so may have internal branches
                        res = objectMerge(existingBranch[key], mergeBranch[key]);
                    }
                }
                // res does not have the key yet
                return {[key]: res};

                // reduce the array of edited branches into a single object
            }).reduce((obj, branch) => Object.assign(obj, branch), {})
    };
}

module.exports = {objectMerge};