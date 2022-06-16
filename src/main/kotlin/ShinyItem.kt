data class ShinyItem(val name: String, val volume: Double, val cost: Double) : Items {
    override fun getConstraint(): Number =
        volume

    override fun getImportance(): Number =
        cost
}