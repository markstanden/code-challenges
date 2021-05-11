package hamming

import (
	"errors"
)

// Distance returns the number of mismatched characters in two strings (case sensitive), and any error
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("input strings are not of equal length")
	}

	distance := 0

	for i := 0; i < len(a); i++ {
		if a[i] != b[i] {
			distance++
		}
	}
	return distance, nil
}
