/**
 * Returns a greedily filled knapsack, filling with the largest value items it can find.
 */
tailrec fun Set<Items>.greedilyFillKnapsack(
        capacity: Double, currentItems: Set<Items> = emptySet(),
): Set<Items> {
    val remainingCapacity = capacity - currentItems.sumOf { it.getConstraint().toDouble() }

    val nextItem = this.filter { it.getConstraint().toDouble() <= remainingCapacity }.maxByOrNull {
        it.getImportance().toDouble()
    } ?: return currentItems

    return this.without(nextItem).greedilyFillKnapsack(capacity, currentItems + nextItem)
}