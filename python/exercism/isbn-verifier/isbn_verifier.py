def is_valid(isbn: str) -> bool:
    """
    Returns True if the supplied isbn is valid

    padding hyphens are acceptable,
    if invalid characters are present returns False.
    """
    # strip hyphens
    isbn_stripped = isbn.replace("-", "")

    # check input is valid
    if len(isbn_stripped) != 10:
        return False

    if not isbn_stripped[:9].isdecimal():
        return False

    if not isbn_stripped[9].isdecimal() and isbn_stripped[9].upper() != "X":
        return False

    # convert the numerical section to a list of ints
    isbn_num = [int(value) for value in isbn_stripped[:9]]
    # check and swap the check digit if required, add to the end
    if isbn_stripped[9] == "X":
        isbn_num.append(10)
    else:
        isbn_num.append(int(isbn_stripped[9]))

    # initialise sum variable
    sum = 0

    # the last number is muliplied by 1, the first by 10
    for index in range(1, 11):
        sum += index * isbn_num[-index]

    # return true if the sum is a multiple of 11
    return sum % 11 == 0
