//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (nth) => {
    if (nth === 0) {
        throw Error("there is no zeroth prime")
    }

    let primes = [2]
    let potentialPrime = 3

    while (primes.length < nth) {
        if (primes.every(value => potentialPrime % value !== 0)) {
            primes.push(potentialPrime)
        }
        potentialPrime += 2 //keep them odd to save a few processor cycles
    }
    return primes.pop()
};
