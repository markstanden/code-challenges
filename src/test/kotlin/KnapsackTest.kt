import org.junit.jupiter.api.Test
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
import kotlin.test.assertEquals

class KnapsackTest {


    companion object {
        private val gem = ShinyItem("Gem", 1.0, 500.0)
        private val headphones = ShinyItem("Headphones", 2.0, 80.0)
        private val mobile = ShinyItem("Mobile Phone", 3.0, 1000.0)
        private val book = ShinyItem("Programming Book", 4.0, 39.99)
        private val laptop = ShinyItem("Laptop", 6.0, 1400.0)
        private val guitar = ShinyItem("Guitar", 10.0, 100.0)
        private val television = ShinyItem("Television", 40.0, 1500.0)
        val baseItems = setOf(gem, headphones, mobile, book, laptop, guitar, television)

        @JvmStatic
        fun greedyResults(): List<Arguments> =
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
                    Arguments.of(5.0, setOf(gem, mobile)),
                    Arguments.of(5.9, setOf(gem, mobile)),
                    Arguments.of(6.0, setOf(laptop)),
                    Arguments.of(6.9, setOf(laptop)),
                    Arguments.of(7.0, setOf(laptop, gem)),
                    Arguments.of(7.9, setOf(laptop, gem)),
                    Arguments.of(10.0, setOf(laptop, mobile, gem)),
                    Arguments.of(10.9, setOf(laptop, mobile, gem)),
                    Arguments.of(20.0, setOf(laptop, mobile, gem, guitar)),
                    Arguments.of(20.9, setOf(laptop, mobile, gem, guitar)),
                    Arguments.of(30.0, setOf(laptop, mobile, gem, guitar, headphones, book)),
                    Arguments.of(30.9, setOf(laptop, mobile, gem, guitar, headphones, book)),
                    Arguments.of(40.0, setOf(television)),
                    Arguments.of(40.9, setOf(television)),
                    Arguments.of(41.0, setOf(television, gem)),
                    Arguments.of(41.9, setOf(television, gem)),
            )

        @JvmStatic
        fun bestResults(): List<Arguments> =
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
                    Arguments.of(5.0, setOf(gem, mobile)),
                    Arguments.of(5.9, setOf(gem, mobile)),
                    Arguments.of(6.0, setOf(gem, mobile, headphones)),
                    Arguments.of(6.9, setOf(gem, mobile, headphones)),
                    Arguments.of(7.0, setOf(laptop, gem)),
                    Arguments.of(7.9, setOf(laptop, gem)),
                    Arguments.of(10.0, setOf(laptop, mobile, gem)),
                    Arguments.of(10.9, setOf(laptop, mobile, gem)),
                    Arguments.of(20.0, setOf(laptop, mobile, gem, headphones, book)),
                    Arguments.of(20.9, setOf(laptop, mobile, gem, headphones, book)),
                    Arguments.of(30.0, setOf(laptop, mobile, gem, guitar, headphones, book)),
                    Arguments.of(30.9, setOf(laptop, mobile, gem, guitar, headphones, book)),
                    Arguments.of(40.0, setOf(gem, headphones, mobile, book, laptop, guitar)),
                    Arguments.of(40.9, setOf(gem, headphones, mobile, book, laptop, guitar)),
                    Arguments.of(41.0, setOf(gem, headphones, mobile, book, laptop, guitar)),
                    Arguments.of(41.9, setOf(gem, headphones, mobile, book, laptop, guitar)),
            )


    }

    @ParameterizedTest
    @MethodSource("greedyResults")
    fun greedilyFillKnapsack(size: Double, items: Set<Items>) {
        assertEquals(items, baseItems.greedilyFillKnapsack(size))
    }

    @ParameterizedTest
    @MethodSource("bestResults")
    fun bruteForceFillKnapsack(size: Double, items: Set<Items>) {
        assertEquals(items, baseItems.bruteForceFillKnapsack(size))
    }

    @Test
    fun allCombinations() {
        assertEquals(
                setOf(setOf(1), setOf(2), setOf(3), setOf(1, 2), setOf(1, 3), setOf(2, 3), setOf(1, 2, 3)), setOf(
                1, 2, 3
        ).allCombinations()
        )
    }
}