def is_armstrong_number(number: int) -> bool:
    """
    Determines whether the provided integer is a valid Armstrong number
    and returns:
    True - number is a valid Armstrong number
    False - number is not a valid Armstrong Number
    """
    # create a list of the digits
    digits = get_digits(number)

    # the power the digits should be raised to is the total number of digits
    power = len(digits)

    # iterate the list and add the sum of the values raised to the required power
    sum = 0
    for d in digits:
        sum += d ** power

    # if the sum of the digits raised to the power is equal to the original value
    # it is a valid armstrong number, so return True.
    if sum == number:
        return True

    # Not an armstrong number so return False
    return False


def get_digits(number: int) -> list[int]:
    """
    Reusable method to extract the individual digits of a
    non-iterable integer and return them as
    now iterable list of integer digits
    """
    # cast the number as an iterable string
    number_as_string = str(number)

    # Use list comprehension to iterate the the string and cast back to ints
    return list(int(digit_as_char) for digit_as_char in number_as_string)
