/**
 * Returns a list of the items after the first occurrence of the passed item.
 * If the item is present multiple times, the first occurrence is used.
 * If the item is not present, an empty List is returned.
 * @param   item    The last item to be removed from the list
 * @return  A new List containing only items after the passed item in the original List.
 */
fun <T> List<T>.after(item: T): List<T> {
    val firstOccurrence = this.indexOf(item)
    return if (firstOccurrence < 0) emptyList<T>() else this.subList(firstOccurrence + 1, this.size)
}

/**
 * Returns a list of the items from the first occurrence of the passed item.
 * If the item is present multiple times, the first occurrence is used.
 * If the item is not present, an empty List is returned.
 * @param   item    The first item to be included in the returned list
 * @return  A new List containing only items from the first occurrence of the passed item.
 */
fun <T> List<T>.from(item: T): List<T> {
    val firstOccurrence = this.indexOf(item)
    return if (firstOccurrence < 0) emptyList<T>() else this.subList(firstOccurrence, this.size)
}