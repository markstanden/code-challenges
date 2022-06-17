/**
 * Returns a set without the passed item present.
 * If the item is not present, a copy of the original set is returned.
 * @param   item    The item to be removed from the set
 * @return  A new set containing all items from the original set, without the item passed as an argument.
 */
fun <T> Set<T>.without(item: T) =
    this.asSequence().filter { it != item }.toSet()