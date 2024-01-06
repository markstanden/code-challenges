import java.util.Arrays;
import java.util.List;
import java.util.stream.IntStream;

class Matrix
{
	private List<List<Integer>> matrix;


	Matrix(String matrixAsString)
	{
		matrix = Arrays.stream(matrixAsString.split("\n"))
		               .map(line -> Arrays.stream(line.split(" "))
		                                  .map(Integer::parseInt)
		                                  .toList())
		               .toList();
	}


	int[] getRow(int rowNumber)
	{
		return matrix.get(rowNumber - 1)
		             .stream()
		             .mapToInt(x -> x)
		             .toArray();
	}


	int[] getColumn(int columnNumber)
	{
		return IntStream.range(0, matrix.size())
		                .map(row -> matrix.get(row)
		                                  .get(columnNumber - 1))
		                .toArray();
	}
}