def factors(value: int) -> list[int]:
    """
    Return a list of the prime factors of a number

    :param value: the number to find the prime factors of
    :type value: int
    :return: an ordered list of the prime factors
    :rtype: list[int]
    """
    # initialise
    prime_factors = list()
    prime = 2

    while value != 1:
        if value % prime == 0:
            prime_factors.append(prime)
            value //= prime
        else:
            prime += 1
    return prime_factors
