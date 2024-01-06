def square_of_sum(number: int) -> int:
    """
    Return the square of the sum of the natural numbers from 1 upto and including the provided number.

    1 2 2 3 3 3 4 4 4 4
    2 2 2 3 3 3 4 4 4 4
    2 2 2 3 3 3 4 4 4 4
    3 3 3 3 3 3 4 4 4 4
    3 3 3 3 3 3 4 4 4 4
    3 3 3 3 3 3 4 4 4 4
    4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4
    4 4 4 4 4 4 4 4 4 4
    """
    total = 0
    sum = 0

    for n in range(1, number + 1):
        total = total + 2 * (n * sum) + n ** 2
        sum += n
    return total


def sum_of_squares(number: int) -> int:
    """Return the sum of the squares of the natural numbers upto and including the provided number."""

    sum_total = 0
    current_square = 0

    # the difference in one square to the next is 2(n-1)+1
    # which simplifies to 2n-1
    for i in range(1, number + 1):
        current_square += 2 * i - 1
        sum_total += current_square

    return sum_total


def difference_of_squares(number: int) -> int:
    """
    Return the difference between the square of the sum of the natural numbers and the the sum
    of the squares of the natural numbers from 1 upto and including the provided number.
    """
    total = 0
    sum = 0

    # I noticed when coding the others that the square of the sum contained n**2 in the iteration
    # which is the sum of the squares, so removing leaves the following:
    for n in range(1, number + 1):
        total += 2 * (n * sum)
        sum += n
    return total
