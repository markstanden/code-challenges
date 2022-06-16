import org.junit.jupiter.api.Test
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
import kotlin.test.assertEquals

class GreedyTest {


    companion object {
        private val gem = ShinyItem("Gem", 1.0, 200.0)
        private val headphones = ShinyItem("Headphones", 2.0, 80.0)
        private val mobile = ShinyItem("Mobile Phone", 3.0, 1000.0)
        private val book = ShinyItem("Programming Book", 4.0, 39.99)
        private val laptop = ShinyItem("Laptop", 6.0, 1400.0)
        private val guitar = ShinyItem("Guitar", 10.0, 200.0)
        private val television = ShinyItem("Television", 40.0, 800.0)
        val baseItems = setOf(gem, headphones, mobile, book, laptop, guitar, television)

        @JvmStatic
        fun listOfSizes(): List<Arguments> =
            listOf<Arguments>(
                    Arguments.of(0.0, emptySet<Items>()),
                    Arguments.of(0.9, emptySet<Items>()),
                    Arguments.of(1.0, setOf(gem)),
                    Arguments.of(1.9, setOf(gem)),
                    Arguments.of(2.0, setOf(gem)),
                    Arguments.of(2.9, setOf(gem)),
                    Arguments.of(3.0, setOf(mobile)),
                    Arguments.of(3.9, setOf(mobile)),
                    Arguments.of(4.0, setOf(gem, mobile)),
                    Arguments.of(4.9, setOf(gem, mobile)),

                    )
    }

    @Test
    @ParameterizedTest
    @MethodSource("listOfSizes")
    fun greedilyFillKnapsack(size: Double, items: Set<Items>) {
        assertEquals(items, baseItems.greedilyFillKnapsack(size, emptySet()))
    }
}