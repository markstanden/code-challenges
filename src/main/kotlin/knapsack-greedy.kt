/**
 * Returns a greedily filled knapsack, filling with the largest value items it can find.
 */
tailrec fun Set<Items>.greedilyFillKnapsack(capacity: Double, currentItems: Set<Items>): Set<Items> {
    val remainingCapacity = capacity - currentItems.sumOf { it.getConstraint().toDouble() }

    val nextItems =
        this.filter { it.getConstraint().toDouble() <= remainingCapacity }.toList()
    return if (nextItems.isEmpty()) currentItems
    else
        this.greedilyFillKnapsack(
            capacity, currentItems + nextItems.maxBy {
        it.getImportance()
            .toDouble()
    })
}