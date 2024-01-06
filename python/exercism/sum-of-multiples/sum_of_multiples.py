def sum_of_multiples(limit: int, factors: list[int]) -> int:
    """
    Return the sum of all of the values that have at least one of the provided factors.  Only the multiples smaller than the limit value are included in the sum.

    :param limit: The maximum value of the multiple to be included in the sum
    :type limit: int
    :param factors: a list of the factors that are at least one factor of the multiples for the sum
    :type factors: list[int]
    :return: the sum of all the valid multiples smaller or equal to the limit value
    :rtype: int
    """

    # initialise the set to hold the multiples in
    multiples = set()

    # we cannot divide by zero
    if 0 in factors:
        factors.remove(0)
        # we could add to the set here,
        # but will not contribute to our sum
        # multiples.add(0)

    # iterate the number range
    for num in range(1, limit):
        for factor in factors:
            # if it cleanly divides add to the set
            if num % factor == 0:
                multiples.add(num)

    return sum(multiples)
