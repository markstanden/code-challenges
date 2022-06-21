import org.junit.jupiter.api.Test
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource
import kotlin.test.assertEquals

class SetsTest {

    companion object {
        /**
         * Combinations are 2(n-1)+1,
         * so we can verify set size easily.
         */
        @JvmStatic
        fun combinations(): List<Arguments> =
            listOf<Arguments>(
                    Arguments.of(3, 7),
                    Arguments.of(4, 15),        // naive times
                    Arguments.of(5, 31),        // 00.006 seconds
                    Arguments.of(6, 63),        // 00.013 seconds (2x)
                    Arguments.of(7, 127),       // 00.023 seconds (2x)
                    Arguments.of(8, 255),       // 00.126 seconds (5x)
                    Arguments.of(9, 511),       // 00.532 seconds (4x)
            )

        @JvmStatic
        fun biggerCombinations(): List<Arguments> =
            listOf<Arguments>(
                    Arguments.of(10, 1023),     // naive 02.673 seconds (5x)
                    Arguments.of(11, 2047),     // naive 31.102 seconds (15x)
                    Arguments.of(12, 4095),     // naive 370 seconds (12x)
                    Arguments.of(13, 8191),
                    Arguments.of(14, 16383),
            )

        @JvmStatic
        fun evenBiggerCombinations(): List<Arguments> =
            listOf<Arguments>(
                    Arguments.of(15, 32767),
                    Arguments.of(16, 65535),
                    Arguments.of(17, 131071),
            )
    }

    @ParameterizedTest
    @MethodSource("combinations")
    fun `naiveAllCombinations of the integer ranges 1 - x (inclusive)`(numberOfItems: Int, expected: Int) {
        assertEquals(expected, 1.rangeTo(numberOfItems).toSet().naiveAllCombinations().size)

    }

    @Test
    fun `naiveAllCombinations of the range 1-3 inclusive`() {
        assertEquals(
                setOf(setOf(1), setOf(2), setOf(3), setOf(1, 2), setOf(1, 3), setOf(2, 3), setOf(1, 2, 3)), setOf(
                1, 2, 3
        ).naiveAllCombinations()
        )
    }

    @ParameterizedTest
    @MethodSource("combinations", "biggerCombinations", /*"evenBiggerCombinations"*/)
    fun `allCombinations of the integer ranges 1 - x (inclusive)`(numberOfItems: Int, expected: Int) {
        assertEquals(expected, 1.rangeTo(numberOfItems).toSet().combinations().size)

    }

    @Test
    fun `allCombinations of the range 1-3 inclusive`() {
        assertEquals(
                setOf(setOf(1), setOf(2), setOf(3), setOf(1, 2), setOf(1, 3), setOf(2, 3), setOf(1, 2, 3)), setOf(
                1, 2, 3
        ).combinations()
        )
    }
}