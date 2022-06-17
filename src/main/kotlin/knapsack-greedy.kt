/**
 * Returns a greedily filled knapsack, filling with the largest value items it can find.
 */
tailrec fun Set<Items>.greedilyFillKnapsack(
        capacity: Double, currentItems: Set<Items> = emptySet(),
): Set<Items> {
    val remainingCapacity = capacity - currentItems.sumOf { it.getConstraint().toDouble() }

    val nextItems = this.filter { it.getConstraint().toDouble() <= remainingCapacity }.toList()
    if (nextItems.isEmpty()) return currentItems

    val nextItem = nextItems.maxBy {
        it.getImportance().toDouble()
    }
    return this.without(nextItem).greedilyFillKnapsack(capacity, currentItems + nextItem)
}