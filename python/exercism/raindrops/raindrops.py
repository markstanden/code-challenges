def convert(number):

    result = ""

    if (number % 3 == 0):
        result = result + "Pling"

    if (number % 5 == 0):
        result = result + "Plang"

    if (number % 7 == 0):
        result = result + "Plong"

    # if we get here and result is still empty,
    # we must have a non multiple of 3, 5 & 7
    if (result == ""):
        result = str(number)

    return result
