from typing import Iterable, Any, overload


class Matrix:
    def __init__(self, matrix_string: str) -> None:
        # First we split the matrix string into rows of strings
        # values separated by spaces
        rows = matrix_string.splitlines()

        # create a list of individual string values from each row
        # and cast the individual strings as integers
        self.values = [[int(value) for value in row.split()] for row in rows]

    def __str__(self) -> str:
        # Produces a pretty matrix
        return "\n".join(
            [" ".join([f"{value}" for value in row]) for row in self.values]
        )

    def row(self, row_number: int) -> list[int]:
        """
        Return a mutable list of a single row from the matrix.

        Use the matrix numbering convention of row 1 being the top row.
        """
        index = row_number - 1
        return self.values[index]

    def column(self, column_number: int) -> list[int]:
        """
        Return a mutable list of a single column from the matrix.

        Use the matrix numbering convention of column 1 being the leftmost column.
        """
        index = column_number - 1

        return Column(self.values, index)


class Column(list):
    def __init__(self, values: list[list[Any]], col: int) -> None:
        # set instance variables for the column
        ## self.values is a reference to the matrix data to get the column from
        self.values = values
        ## this is the zero indexed reference to the column we are interested in
        self.col_index = col

        # initialise the parent list with the column data
        super().__init__([row[self.col_index] for row in self.values])

    @overload
    def __setitem__(self, index: slice, value: Iterable[Any]) -> None:
        # if we change a value in the column list,
        # we want out changes to be reflected in the matrix data
        self.values[index][self.col_index] = value

    def __getitem__(self, index: slice) -> list[Any]:
        return self.values[index][self.col_index]


# Tests for tutor added challenge to add ability to
# change column and row values using square bracket notation.
# Previously the columns were a copy of the matrix data, and changes
# did not affect the source matrix values.


def test_row():
    matrix = Matrix("1 2 3\n4 5 6\n7 8 9")
    assert matrix.row(2) == [4, 5, 6]
    matrix.row(2)[1] = 6
    assert matrix.row(2) == [4, 6, 6]


def test_col():
    matrix = Matrix("1 2 3\n4 5 6\n7 8 9")
    assert matrix.column(1) == [1, 4, 7]
    matrix.column(1)[2] = 6
    print(matrix)
    assert matrix.column(1) == [1, 4, 6]

new = Matrix("1 2 3\n4 5 6\n7 8 9")
print(new)
print(new.column(1))
new.column(1)[1] = 5
print(new)
print(new.column(1))