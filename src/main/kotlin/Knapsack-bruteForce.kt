/**
 * Returns a perfectly filled knapsack, trying all combinations and returning the highest value knapsack.
 */
fun Set<Items>.bruteForceFillKnapsack(
        capacity: Double,
        combinationsProducer: Set<Items>.() -> Set<Set<Items>>,
): Set<Items> {
    val items = combinationsProducer.invoke(this.toSet())
    return items.asSequence()
        .filter { combination -> combination.sumOf { it.getConstraint().toDouble() } <= capacity }
        .maxByOrNull { combination -> combination.sumOf { it.getImportance().toDouble() } } ?: emptySet()
}