class PhoneNumber:
    def __init__(self, number: str) -> None:
        # strip the random characters from the string
        stripped_list = [digit for digit in number if digit.isdecimal()]

        string_number = "".join(stripped_list)

        # strip the leading 1 if present
        if string_number[0] == "1":
            string_number = string_number[1:]

        # check the input string
        if len(string_number) != 10:
            raise ValueError("invalid number")

        # check that the first and fourth digits are between 2-9 incl
        if int(string_number[0]) < 2 or int(string_number[3]) < 2:
            raise ValueError("invalid number")

        # set the instance variables
        self.area_code = string_number[:3]
        self.number = string_number

    def pretty(self) -> str:
        """Produce a neatly formatted number with the area code in round brackets, number groups separated by hyphens"""
        return f"({self.number[:3]})-{self.number[3:6]}-{self.number[6:]}"
