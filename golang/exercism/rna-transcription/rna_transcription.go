package strand

// the nucleotides and their complement.
var dNucleotides = []rune("GCTA")
var rNucleotides = []rune("CGAU")

// ToRNA converts a dna string of nucleotides and
// returns the RNA complentary nucleotides as a string.
func ToRNA(dna string) string {

	// Create a map that gives the complement nucleotide as a value
	// to the dnaNucleotide as a key
	var complement = make(map[rune]rune)

	// build the map by iterating the nuclotide slices declared
	for i, v := range dNucleotides {
		complement[v] = rNucleotides[i]
	}

	//create the slice to return as a string
	var rna []rune

	//iterate the supplied string
	for _, n := range dna {
		//check whether the provided nucleotide exists in our map
		//if not return an empty string
		if _, exists := complement[n]; !exists {
			return ""
		}

		//as it exists we add to the end of the slice
		rna = append(rna, complement[n])

	}

	//convert the slice to a string and return
	return string(rna)
}
