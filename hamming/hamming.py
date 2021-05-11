def distance(strand_a: str, strand_b: str) -> int:
    """
    return a hamming distance between two strings
    """

    # Check for invalid inputs
    if len(strand_a) != len(strand_b):
        raise ValueError("mismatched input strings")

    # initialise
    count = 0
    a = strand_a.upper()
    b = strand_b.upper()

    # iterate the strings and increment the count variable
    # if the characters at a given index differ
    for i in range(len(strand_a)):
        if a[i] != b[i]:
            count += 1

    # return the count of the differences
    return count
