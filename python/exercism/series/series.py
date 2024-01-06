def slices(series: str, length: int) -> list[str]:
    """
    slices takes a string of numbers and breaks it
    into substrings of the provided length.
    returns a list of substrings
    """

    # check the inputs
    if len(series) == 0:
        raise ValueError("empty string supplied")
    if length <= 0 or length > len(series):
        raise ValueError("invalid substring length")

    # sub_strings holds the resulting substrings
    sub_strings: list[str] = []

    # calculate the number of potential substrings
    # e.g. 12345 has 2 x 4 digit substrings: 1234, 2345
    sub_string_count = len(series) - length + 1

    # iterate the required amount of times,
    # and add each substring to the results list
    for index in range(sub_string_count):
        sub_strings.append(series[index : index + length])

    # return the list of substrings
    return sub_strings
