def steps(number: int) -> int:
    """
    Return the number of steps before a number reaches 1 by following the Collatz conjecture pattern.

    For any positive integer n:
    If n is even, divide n by 2 to get n / 2.
    If n is odd, multiply n by 3 and add 1 to get 3n + 1.

    :param number: The starting value
    :type number: int
    :return: The number of steps required to reach 1
    :rtype: int
    """

    # Check inputs as we are only interested in positive integers
    if number <= 0:
        raise ValueError("invalid input, number is zero or negative")

    # initialise.
    # result needs to be type float due to the division step for even values
    steps: int = 0
    result: float = float(number)

    while result != 1:

        # if even
        if not (result % 2):
            result = result / 2
            steps += 1
            print(steps, result)

        # if odd, and not yet 1
        if result != 1 and (result % 2):
            result = 3 * result + 1
            steps += 1
            print(steps, result)

    return steps
