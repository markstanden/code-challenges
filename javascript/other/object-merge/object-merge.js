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
 * @param {object} addition
 * @return {object}
 */
function objectMerge(target, addition) {
    const result = {
        ...target,
    };
    const branch = (res, add) =>
        Object.keys(res)
            .map((key) => {
                if (add.hasOwnProperty(key)) {
                    if (add[key] === typeof Object) {
                        branch(res[key], add[key]);
                    } else {
                        return { [key] : add[key] };
                    }
                } else {
                    return { key: res[key] };
                }
            });

    return branch(result, addition)[0];
}

module.exports = {objectMerge};