package PureSets

/**
 * Returns a set without the passed item present.
 * If the item is not present, a copy of the original set is returned.
 * @param   item    The item to be removed from the set
 * @return  A new set containing all items from the original set, without the item passed as an argument.
 */
fun <T> Set<T>.without(item: T) =
    this.asSequence().filter { it != item }.toSet()

/**
 * Recursively generates all valid subsets
 */
fun <T> naiveAllCombinations(remaining: Set<T>): Set<Set<T>> {
    return if (remaining.size == 1) setOf(remaining)
    else remaining.asSequence().flatMap {
        naiveAllCombinations(remaining.without(it))
    }.toSet().plusElement(remaining)
}

/**
 * recursively, progressively generates all valid subsets.  This is far faster than brute force.
 */
tailrec fun <T> allCombinations(remaining: Set<T>, currentCombinations: Set<Set<T>> = emptySet()): Set<Set<T>> {
    if (remaining.isEmpty()) return currentCombinations
    val next: T = remaining.first()
    val newCombinations =
        (currentCombinations.plusElement(emptySet())).asSequence().map { it.plusElement(next) }.toSet()
    return allCombinations(remaining.without(next), currentCombinations + newCombinations)
}