import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.IntStream;

/**
 * Encapsulate the storage of the grid to hide its
 * implementation from the classes using it.
 * The grid class produces sequential streams representing elements of the grid.
 *
 * @author Mark Standen
 * @version 1.0.0
 */
public class SudokuGrid extends Grid<Integer>
{
	public static final int BLOCK_SIZE = 3;
	public static final int GRID_LENGTH = 9;

	public static final String WEBFORM_REGEX = "R[0-8]-C[0-8]=([0-9]?)(?=&|$)";


	public SudokuGrid(List<List<Integer>> listOfIntegerList)
	{
		super(listOfIntegerList, SudokuGrid.BLOCK_SIZE, SudokuGrid.BLOCK_SIZE);
	}

//	public SudokuGrid(Integer[][] integerArray)
//	{
//		super(Grid.convert2DArrayTo2DList(integerArray), SudokuGrid.BLOCK_SIZE, SudokuGrid.BLOCK_SIZE);
//	}
//
//
//
//	public SudokuGrid(int[][] arrayData)
//	{
//		this(SudokuGrid.convertPrimitiveGrid(arrayData));
//	}



	/**
	 * converts a 2D boxed integer array into a primitive 2D int array.
	 *
	 * @param grid array to be converted
	 * @return boxed integer 2D array.
	 */
	public static Integer[][] convertPrimitiveGrid(int[][] grid)
	{
		return Arrays.stream(grid)
				.sequential()
				.map(rowStream -> Arrays.stream(rowStream)
						.boxed()
						.toArray(Integer[]::new))
				.toArray(Integer[][]::new);
	}

	public static Integer[][] convertList(List<List<Integer>> grid)
	{
		return grid.stream()
				.sequential()
				.map(list -> list.toArray(Integer[]::new))
				.toArray(Integer[][]::new);
	}


	/**
	 * Return a new grid object from supplied form data.
	 * Assumes passed string not sanitised and will return null if string is not
	 * in expected format.
	 *
	 * @param formQuery
	 * 		the data string received from the front end form request.
	 * 		this should progress left to right, top to bottom.
	 * 		R0-C0=0&R0-C1=0&...
	 *
	 * @return new Grid object
	 */
	public static SudokuGrid fromFormData(String formQuery)
	{
		Pattern regexPattern = Pattern.compile(WEBFORM_REGEX);
		Matcher regexMatcher = regexPattern.matcher(formQuery);

		List<Integer> safe = regexMatcher.results()
				.map(matchResult -> matchResult.group(1))

				/*  The webform can have empty values,
				these have been matched by the regex expression,
				but empty values will break the grid, so replace with 0.  */
				.map(match -> match.isBlank() ? "0" : match)
				.map(Integer::valueOf)
				.toList();


		List<List<Integer>> out = IntStream.range(0, GRID_LENGTH)
				.mapToObj(rowStart ->
								  safe.subList(SudokuGrid.GRID_LENGTH * rowStart,
													SudokuGrid.GRID_LENGTH * (rowStart + 1))
						 )
				.toList();

		return new SudokuGrid(out);
	}
}