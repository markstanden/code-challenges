from typing import Callable


def saddle_points(matrix: list[list[int]]) -> list[dict[str, int]]:
    """
    Return a list of points indentifying the "saddle points" within a valid matrix.

    :param matrix: The matrix to check, e.g. [[1,2,3],[4,5,6],[7,8,9]]
    :type matrix: list[[int]]
    :raises ValueError: Differing sizes of rows will produce a vlaue error
    :return: returns a list of dict{"row": int, "column": int} to represent each saddle point
    :rtype: list[dict[str, int]]  # list[dict{"row": int, "column": int}]
    """
    # Check for valid matrix
    for row in matrix:
        if len(row) != len(matrix[0]):
            raise ValueError("matrix has rows of differing sizes")

    # create an empty list of saddle points
    sorted_points: list[dict[str, int]] = []  # list[{"row": int, "column": int}]

    # create an empty list of potential saddles
    potential_saddles: list[tuple[int, int]] = []

    # iterate each row in the matrix
    for row_index in range(len(matrix)):    
    #index_list.append(best_fit_index)
        )

    # iterate the potential saddle co-ordinates
    for coords in potential_saddles:
        # get a list of the smallest (or equal) row indices for each of the column high points
        smallest_in_row = index_list([row[coords[1]] for row in matrix], lessthan)
        # if the smallest (or equal smallest) row index is also
        # the row index of the highest (or equal highest) column value
        # we have found a saddle point
        if coords[0] in smallest_in_row:
            # add the points to a list of dictionaries,
            # first change the points to matrix notation for the rows and column numbers
            sorted_points.append({"row": coords[0] + 1, "column": coords[1] + 1})

    return sorted_points


def index_list(values: list[int], comparison: Callable[[int, int], bool]) -> list[int]:
    """
    Return a list of indices from the provided list of values that most satisfy the comparison function passed.

    :param values: the list of data to compare
    :type values: list[int]
    :param comparison: the function to perform the comparison between items in the list
    :type comparison: Callable[[int,int],bool]
    :return: The index of the values within the list that return true from the callback
    :rtype: list[int]
    """
    # initialise with first value
    index_list: list[int] = [0]

    # run the comparison
    for i in range(1, len(values)):
        # check whether the current value returns more true than the current best fit
        if comparison(values[i], values[index_list[0]]):
            # if so update the best fit index list
            index_list = [i]
        # if there are values equal to the current best fit, add that index to the list
        elif values[i] == values[index_list[0]]:
            index_list.append(i)

    # sort the index list
    index_list.sort()

    return index_list


def greaterthan(a: int, b: int) -> bool:
    """Return true when arg1 > arg2"""
    return a > b


def lessthan(a: int, b: int) -> bool:
    """Return true when arg1 < arg2"""
    return a < b
