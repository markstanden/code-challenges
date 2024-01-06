package scrabble

import "strings"

// Score takes a string argument and sums produces a numerical score based on the provided letter values
func Score(word string) (total int) {
	// iterate the word
	for _, letter := range word {
		// switch each rune, converting it to an uppercase string for comparison first.
		switch strings.ToUpper(string(letter)) {
		case "A", "E", "I", "O", "U", "L", "N", "R", "S", "T":
			total = total + 1
		case "D", "G":
			total = total + 2
		case "B", "C", "M", "P":
			total = total + 3
		case "F", "H", "V", "W", "Y":
			total = total + 4
		case "K":
			total = total + 5
		case "J", "X":
			total = total + 8
		case "Q", "Z":
			total = total + 10
		}
	}
	return
}
