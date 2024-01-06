package dna

import "errors"

// Histogram is a mapping from nucleotide to its count in given DNA.
// Choose a suitable data type.
type Histogram map[rune]int

// DNA is a list of nucleotides. Choose a suitable data type.
type DNA []rune

// Counts generates a histogram of valid nucleotides in the given DNA.
// Returns an error if d contains an invalid nucleotide.
///
// Counts is a method on the DNA type. A method is a function with a special receiver argument.
// The receiver appears in its own argument list between the func keyword and the method name.
// Here, the Counts method has a receiver of type DNA named d.
func (d DNA) Counts() (Histogram, error) {

	// Create our histogram
	var h = make(Histogram)

	// Convert the string values of ACGT into runes to add zero counters
	// to our histogram.
	validNucleotides := []rune("ACGT")
	for _, vn := range validNucleotides {
		h[vn] = 0
	}

	// To check for the (almost unlimited) potential invalid runes
	// we will copy the map and delete the valid runes afterwards
	// if there is anything left return an error.
	var check = make(Histogram)

	// iterate the list of provided nucleotides, adding to both Histograms
	for _, n := range d {
		h[n]++     // add any found runes to the main Histogram
		check[n]++ // also add any found runes to our check Histogram
	}

	// Now we delete the valid nucleotide keys from the check histogram
	for _, vn := range validNucleotides {
		delete(check, vn)
	}

	// Check for any other present keys (which must be invalid)
	if len(check) > 0 {
		return nil, errors.New("invalid nucleotide found")
	}

	return h, nil
}
