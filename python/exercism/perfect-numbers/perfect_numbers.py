def classify(number: int) -> str:
    """
    Takes a number and returns a string describing whether it is perfect, abundant or deficient
    aliquot sum = number returns "perfect"
    aliquot sum > number returns "abundant"
    aliquot sum < number returns "deficient"
    """

    # Check for invalid inputs
    # ValueError is an exception raised when the value is the correct type,
    # but an unsuitable value, for example division by zero below.
    if number < 0:
        raise ValueError("only real factors are supported")
    if number == 0:
        raise ValueError("division by zero not possible")

    # create an iterable set of factors
    factors: set[int] = get_factors(number)

    # the aliquot sum does not include the number itself,
    # so we should remove this from the set of factors
    factors.remove(number)

    # initialise the sum variable
    aliquot_sum: int = 0
    for f in factors:
        aliquot_sum += f

    if aliquot_sum < number:
        return "deficient"
    elif aliquot_sum > number:
        return "abundant"
    else:
        return "perfect"


def get_factors(number: int) -> set[int]:
    """
    Returns real factors for a given number,
    as an iterable set of integer factors
    """

    # add the number and 1 as it's first factors,
    # as all real numbers can be divided
    # by 1 and itself
    factors: set[int] = {1, number}
    potential_factor = 2

    while potential_factor <= number / 2:
        remainder = number % potential_factor

        if remainder == 0:
            factors.add(potential_factor)
            factors.add(number // potential_factor)
        potential_factor += 1

    return factors
