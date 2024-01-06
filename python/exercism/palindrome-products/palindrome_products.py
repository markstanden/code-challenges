from typing import Optional


def largest(min_factor: int, max_factor: int) -> tuple[Optional[int], list[list[int]]]:
    """
    Return the largest pallindrome that is a product of the numbers within the provided range.

    :param min_factor: The smallest potential pallindrome factor
    :type min_factor: int
    :param max_factor: The largest potential pallindrome factor
    :type max_factor: int
    :return: returns a tuple of the largest pallindrome, and a list of its factors
    :rtype: tuple[Optional[int], list[list[int]]]
    """

    # find the pallindromes and the factors
    pallindromes, factors = get_pallindrome_factors(min_factor, max_factor)

    if pallindromes:
        # pallindromes is sorted smallest to largest,
        # so largest pallindrome is the last entry
        return pallindromes[-1], factors[pallindromes[-1]]
    return None, []


def smallest(min_factor: int, max_factor: int) -> tuple[Optional[int], list[list[int]]]:
    """
    Return the smallest pallindrome that is a product of the numbers within the provided range.

    :param min_factor: The smallest potential pallindrome factor
    :type min_factor: int
    :param max_factor: The largest potential pallindrome factor
    :type max_factor: int
    :return: returns a tuple of the smallest pallindrome, and a list of its factors
    :rtype: tuple[Optional[int], list[list[int]]]
    """
    # find the pallindromes and the factors
    pallindromes, factors = get_pallindrome_factors(min_factor, max_factor)

    if pallindromes:
        # pallindromes is sorted smallest to largest,
        # so smallest pallindrome is the first entry
        return pallindromes[0], factors[pallindromes[0]]
    return None, []


def get_pallindrome_factors(
    min_factor: int, max_factor: int
) -> tuple[list[int], dict[int, list[list[int]]]]:
    """
    Return a list of pallindromes that is a product of the numbers within the provided range.

    :param min_factor: The smallest potential pallindrome factor
    :type min_factor: int
    :param max_factor: The largest potential pallindrome factor
    :type max_factor: int
    :return: returns a tuple of a list of pallindromes, and a list of its factors
    :rtype: tuple[list[int], dict[int, list[list[int]]]]
    """

    # Check inputs
    if min_factor > max_factor:
        raise ValueError("lower value is larger than higher value")

    # initialise
    factors: dict[int, list[list[int]]] = dict()
    pallindromes: list[int] = list()

    # iterate through the factors
    for factor_one in range(min_factor, max_factor + 1):
        # 1x1 1x2 1x3 1x4 1x5
        #     2x2 2x3 2x4 2x5
        #         3x3 3x4 3x5
        #             4x4 4x5
        #                 5x5
        # We only need to iterate from factor_one to the max_factor
        # as the factors below factor_one are repeat combinations
        for factor_two in range(factor_one, max_factor + 1):
            product = factor_one * factor_two
            # convert to string first so we can reverse it
            if str(product) == str(product)[::-1]:
                # we have a pallindrome, so add to the list
                pallindromes.append(product)
                # add the factors to the factors dictionary, use the pallindrome as the key
                if product in factors:
                    # pallindrome is already in the dict, so add the new factors
                    factors[product].append([factor_one, factor_two])
                else:
                    # create the first entry for the pallindrome in the dict
                    factors[product] = [[factor_one, factor_two]]

    # sort the pallindrome list so the largest and the smallest can be indentifed
    pallindromes.sort()
    return pallindromes, factors
