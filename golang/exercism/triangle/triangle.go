package triangle

import "math"

// Kind is a string representation of the type of triangle
type Kind string

const (
	NaT Kind = "NaT"
	Equ Kind = "Equ"
	Iso Kind = "Iso"
	Sca Kind = "Sca"
)

// KindFromSides analyses the provided floats and determines whether the three lengths
// could form a triangle.  If it can it returns the type of triangle it forms.
func KindFromSides(a, b, c float64) Kind {

	// Check for bad input values
	if math.IsNaN(a) || math.IsNaN(b) || math.IsNaN(c) {
		// One of the parameters holds a non numeric values
		return NaT
	}

	if math.IsInf(a, 0) || math.IsInf(b, 0) || math.IsInf(c, 0) {
		// one of the sides has infinite length
		return NaT
	}

	// Negative or Zero values
	if a <= 0 || b <= 0 || c <= 0 {
		// zero length of any of the sides is likely not a triangle.
		// length is a scalar property and so cannot be negative.
		// possibly return an error
		return NaT
	}

	// Check to see whether a triangle can be formed
	if a+b < c || a+c < b || b+c < a {
		// One of the sides is too long to form a triangle
		return NaT
	}

	// if all sides are equal
	if a == b && b == c {
		// Triangle is equilateral
		return Equ
	}

	// if any two sides are equal
	if a == b || a == c || b == c {
		// triangle is isosceles
		return Iso
	}

	// Triangle must therefore be a scalene
	return Sca
}
