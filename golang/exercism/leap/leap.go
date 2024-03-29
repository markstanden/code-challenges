package leap

// IsLeapYear takes a year as an argument and returns whether or not it is a leap year
func IsLeapYear(year int) bool {

	if year%400 == 0 {
		return true
	}

	if year%100 == 0 {
		return false
	}

	if year%4 == 0 {
		return true
	}

	return false
}
