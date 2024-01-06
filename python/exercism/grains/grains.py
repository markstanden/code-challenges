def square(number: int) -> int:
    """Return the number of grains on the nth square of the chessboard"""
    if number not in range(1, 65):
        raise ValueError(
            "input error - input value should be positive value between 1 and 64 inclusive"
        )

    return 2 ** (number - 1)


def total() -> int:
    """
    Returns the sum of the grains of rice on the chess board,
    if the number of grains doubles on each successive square.
    """
    return finite_geometric_sum(64, 2, 1)


def total_list(board_size: int = 64) -> int:
    """Return the total number grains on the chess board using list comprehension, and the sum function"""
    return sum([2 ** square for square in range(board_size)])


def total_for(board_size: int = 64) -> int:
    """Return the total number grains on the chess board using a for loop"""
    grains = 0
    for i in range(board_size + 1):
        grains += 2 ** i
    return grains

def bit_shift(board_size: int = 64) -> int:
    """return the total number of grains on the board"""
    return (1 << board_size) -1

def finite_geometric_sum(terms: int = 64, ratio: int = 2, first_term: int = 1) -> int:
    """
    Return the finite geometric sum of a series.

    This was found to be approximately 40 times faster than the for loop or list comprehension methods.
    """
    # using floor division ensures an int is returned, it should cleanly divide as it is the sum of ints
    return (first_term * (1 - ratio ** terms)) // (1 - ratio)


def bench(func_string: str, desc: str, repeat: int = 100000) -> str:
    """
    Return a formatted string, displaying a description and the **average** execution time of the function string

    :param func_string: the function string containing the command to be benchmarked
    :type func_string: str
    :param desc: the description to appear in the formatted string
    :type desc: str
    :param repeat: the number of times to run the command, defaults to 100000
    :type repeat: int, optional
    :return: a formatted string with a description of the benchmark and the average execution time in nanoseconds
    :rtype: int
    """
    return f"{desc}: {1000000000 * timeit.timeit(func_string, number=repeat, globals=globals() ) /repeat:.0f}ns"


if __name__ == "__main__":
    import timeit

    # Benchmark the potential solutions
    print(bench("total_for()", "Using a for loop to iterate and calculate"))  # ~16500ns
    print(
        bench("total_list()", "Using list comprehension to iterate and calculate")
    )  # ~15500ns
    print(
        bench("finite_geometric_sum()", "Using the formula for a finite geometric sum")
    )  # ~400ns
    print(bench("bit_shift()", "bit_shifting the binary representation of the int")) # ~100ns