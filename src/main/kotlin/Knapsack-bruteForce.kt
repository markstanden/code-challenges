/**
 * Returns a perfectly filled knapsack, trying all combinations and returning the highest value knapsack.
 */
fun Set<Items>.bruteForceFillKnapsack(
        capacity: Double,
): Set<Items> {


    val items = this.toSet().allCombinations()
    return items.asSequence()
        .filter { combination -> combination.sumOf { it.getConstraint().toDouble() } <= capacity }
        .maxByOrNull { combination -> combination.sumOf { it.getImportance().toDouble() } } ?: emptySet()


}