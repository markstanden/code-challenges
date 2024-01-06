def is_isogram(string: str) -> bool:
    """
    Determine whether a word is a valid isogram

    :param string: The word to check
    :type string: str
    :return: True if word is a valid isogram, False if not valid isogram
    :rtype: bool
    """
    # clean the input - Remove spaces, hyphens, standardise the case
    clean_string = string.replace(" ", "")
    clean_string = clean_string.replace("-", "")
    test_string = clean_string.casefold()

    # check the cleaned string
    if not test_string.isalpha:
        raise ValueError("string contains non alphabetic characters")

    # if there are no duplicates the set length will equal the string length
    return len(set(test_string)) == len(test_string)
