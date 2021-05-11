package proverb

import "fmt"

// Proverb takes a slice of string objects and returns the proverb as a slice of string lines
func Proverb(rhyme []string) []string {
	var proverb []string

	// basic checks for duff input values
	if len(rhyme) == 0 || rhyme[0] == "" {
		return proverb
	}

	// iterate the slice, adding the previous value and the current value to the string
	for i := 1; i < len(rhyme); i++ {
		line := fmt.Sprintf("For want of a %s the %s was lost.", rhyme[i-1], rhyme[i])
		proverb = append(proverb, line)
	}

	// add the final line, which contains the first value in the slice.
	finalLine := fmt.Sprintf("And all for the want of a %s.", rhyme[0])
	proverb = append(proverb, finalLine)
	return proverb
}
