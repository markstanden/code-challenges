import java.util.stream.IntStream;

class DifferenceOfSquaresCalculator
{
	public static int beforeToZero(int inclusive)
	{
		return IntStream.rangeClosed(1, inclusive)
		                .sum();
	}


	public static int square(int integer)
	{
		return integer * integer;
	}


	public static int computeSquareOfSumTo(int input)
	{
		return square(beforeToZero(input));
	}


	/**
	 * Return the sum of the squares of the natural numbers
	 * from 1 up to and including the provided number.
	 * i.e.
	 * (a * a) + (b * b) + (c * c)
	 */
	int computeSumOfSquaresTo(int input)
	{
		return IntStream.rangeClosed(1, input)
		                .map(n -> n * n)
		                .sum();

	}



	int computeDifferenceOfSquares(int input)
	{
		return computeSquareOfSumTo(input) - computeSumOfSquaresTo(input);
	}
}