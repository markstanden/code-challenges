//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {

    constructor(p, g) {
        if ((p >= 9999) || (g >= 9999)) {
            throw Error("prime out of permitted range")
        }

        if ((p < 0) || (g < 0)) {
            throw Error("Negative value submitted")
        }

        if (!this.isPrime(p) || !this.isPrime(g)) {
            throw Error("non-prime values submitted.")
        }

        /** @type {Number} prime number less than 9999 */
        this.primeP = p

        /** @type {Number} prime number less than 9999 */
        this.primeG = g
    }

    /**
     * returns true if supplied number is prime
     * @param number
     * @returns {boolean}
     */
    isPrime(number) {
        for (let i = 2; i < number; i++) {
            if ((number % i) === 0) {
                return false
            }
        }
        return true
    }

    getPublicKey(privateKey) {
        if (privateKey <= 1) {
            throw Error("Private key must have a value greater than 1")
        }
        if (privateKey >= this.primeP) {
          throw Error("Private key cannot equal or greater to the chosen prime 'p'")
        }
        return (this.primeG ** privateKey) % this.primeP
    }

    getSecret(theirPublicKey, myPrivateKey) {
        return (theirPublicKey ** myPrivateKey) % this.primeP
    }
}
