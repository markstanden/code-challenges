import math


class Allergies:

    allergens = {
        1: "eggs",
        2: "peanuts",
        4: "shellfish",
        8: "strawberries",
        16: "tomatoes",
        32: "chocolate",
        64: "pollen",
        128: "cats",
    }

    def __init__(self, score: int) -> None:
        # initialise list
        self._allergic = []

        max = 0

        if score:
            # to futureproof the logic, we need to account for future values
            # log2 returns the power tha 2 should be raised to to get our score value,
            # int returns the floor value, which will be the largest value to subtract
            max = int(math.log2(score))

        # create a list of the powers of 2 to iterate through
        power_series_of_2 = [2 ** val for val in range(max, -1, -1)]

        # iterate the allergens
        for val in power_series_of_2:
            # if there is a zero or positive remainder after subtracting the allergen,
            # the allergen is positive match, and should be added.
            if (score - val) >= 0:
                score -= val
                # if the key is in the allergens dict add the string
                # representation of the allergen to the allergic list.
                if val in self.allergens:
                    self._allergic.append(self.allergens[val])

    def allergic_to(self, item: str) -> bool:
        # if the allergen is present in the list, return true
        return item in self._allergic

    @property
    def lst(self) -> list[str]:
        # return a list of the allergies a for the score.
        return self._allergic
