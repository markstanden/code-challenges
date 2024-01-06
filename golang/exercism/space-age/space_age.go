package space

type Planet string

// provided data for the ratio of the orbits around the sun
var earthYearRatio = map[Planet]float64{
	"Mercury": 0.2408467,
	"Venus":   0.61519726,
	"Earth":   1.0,
	"Mars":    1.8808158,
	"Jupiter": 11.862615,
	"Saturn":  29.447498,
	"Uranus":  84.016846,
	"Neptune": 164.79132,
}

// provided value of seconds in an earth year
// 365.25<days> * 24<hours> * 60<mins> * 60<seconds>
const earthYearSeconds = 31557600

// Age returns the number of planet specific years (i.e number of orbits of the sun)
// for a given planet for a provided number of seconds
func Age(seconds float64, planet Planet) float64 {
	// Calculate the number of earth years the seconds provided equates to
	earthYears := seconds / earthYearSeconds

	// divide the years by the ratio and return
	return earthYears / earthYearRatio[planet]
}
