package accumulate

// Accumulate takes a slice of strings and performs the callback on every item,
// Adds the result to a newly created slice of strings which is returned once complete
func Accumulate(words []string, callback func(string) string) (converted []string) {

	// Iterate the slice of strings
	for _, word := range words {

		// perform the callback on each item and add to the new slice
		converted = append(converted, callback(word))

	}

	// return the new slice
	return

}
