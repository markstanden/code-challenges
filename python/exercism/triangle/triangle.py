def equilateral(sides: list[int]) -> bool:
    """Return true if all three lengths are equal in size."""

    if not valid_triangle(sides):
        return False

    return len(set(sides)) == 1


def isosceles(sides: list[int]) -> bool:
    """Return true if two lengths (or possibly all three) are equal in size."""

    if not valid_triangle(sides):
        return False

    return len(set(sides)) <= 2


def scalene(sides: list[int]) -> bool:
    """Return true if all three lengths are different in size."""

    if not valid_triangle(sides):
        return False

    return len(set(sides)) == 3


def degenerate(sides: list[int]) -> bool:
    """Return true if two lengths sum to the length of the remaining side."""

    if not valid_triangle(sides):
        return False

    triangle_perimeter = sum(sides)
    for length in sides:
        if (triangle_perimeter - length) == length:
            return True
    return False


def valid_triangle(sides: list[int]) -> bool:
    """Return true if the sides fit the basic requirements of a triangle."""

    # Check the triangle has three sides
    if len(sides) != 3:
        return False

    # Check Lengths
    triangle_perimeter = sum(sides)
    for length in sides:

        # A zero length side can't make a triange
        if length <= 0:
            return False

        # The sum of the length of any two sides must be less
        # or equal than the length of the remaining side,
        # otherwise the triangle cannot be closed
        if (triangle_perimeter - length) < length:
            return False

    # Passed tests
    return True


"""
Test code for Degenerate Triangle
"""

import unittest


class DegenerateTriangleTest(unittest.TestCase):
    def test_first_side_is_largest(self):
        self.assertIs(degenerate([2, 1, 1]), True)

    def test_second_side_is_largest(self):
        self.assertIs(degenerate([1, 2, 1]), True)

    def test_last_side_is_largest(self):
        self.assertIs(degenerate([1, 1, 2]), True)

    def test_last_two_sides_are_equal(self):
        self.assertIs(degenerate([4, 2, 2]), True)

    def test_first_two_sides_are_equal(self):
        self.assertIs(degenerate([4, 4, 8]), True)

    def test_first_and_last_sides_are_equal(self):
        self.assertIs(degenerate([5, 10, 5]), True)

    def test_no_sides_are_equal(self):
        self.assertIs(degenerate([2, 3, 5]), True)

    def test_first_triangle_inequality_violation(self):
        self.assertIs(degenerate([1, 1, 3]), False)

    def test_second_triangle_inequality_violation(self):
        self.assertIs(degenerate([1, 3, 1]), False)

    def test_third_triangle_inequality_violation(self):
        self.assertIs(degenerate([3, 1, 1]), False)

    def test_sides_may_be_floats(self):
        self.assertIs(degenerate([0.43, 1.11, 0.68]), True)
