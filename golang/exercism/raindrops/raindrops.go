package raindrops

import "fmt"

func Convert(value int) (output string) {
	if value == 0 {
		return
	}
	if value%3 == 0 {
		output = output + "Pling"
	}
	if value%5 == 0 {
		output = output + "Plang"
	}
	if value%7 == 0 {
		output = output + "Plong"
	}
	if output == "" {
		output = fmt.Sprint(value)
	}
	return
}
