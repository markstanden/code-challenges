import random
import string
from typing import Generator


class Cipher:
    def __init__(self, key: str = None, key_size: int = 256) -> None:
        """
        Create a cipher based on the caesar cipher.

        The message is encrypted/decrypted based on the passed key.  If a key is not passed as an argument a random key is generated, the size of which can be specified.

        :param key: the cipher key used to encode the message, defaults to None
        :type key: str, optional
        :param key_size: ignored unless key is left empty, specifies the size of the generated key, defaults to 256
        :type key_size: int, optional
        """

        # check for presence of a cipher key
        if key:
            # key was passed, so clean and use for encoding
            # clean the key into lowercase letters only
            self.key = "".join([char for char in key.lower() if char.isalpha()])
        else:
            # no key passed, so create a psuedo random key
            self.key = "".join(
                random.choice(string.ascii_lowercase) for i in range(key_size)
            )

    # MyPy expects generator functions to return Generator[next type, send type, exit type]
    def get_key(self) -> Generator[int, None, None]:
        """
        Return the next key in the infinitely rotating key used as a cipher

        :return: the current key which represents the amount the text should be shifted
        :rtype: int
        :yield: the next character shift in the sequence
        :rtype: Iterator[int]
        """

        while True:
            for key in self.key:
                print(key)
                yield ord(key) - ord("a")

    def encode(self, text: str) -> str:
        """
        Encode the passed text with the instance cipher key.

        :param text: The message to be encrypted
        :type text: str
        :return: The encrypted message
        :rtype: str
        """

        # create an instance of the key generator
        current_key = self.get_key()

        # iterate the text string, converting each letter
        # to it's ascii code and adding the next key from
        # the cypher to confuscate the word.
        encoded_ascii = list()
        for letter in text:
            # wrap letters as per the caesar cipher.
            if letter.isalpha():
                enc = ord(letter) + next(current_key)
                if (letter.islower() and enc > ord("z")) or (
                    letter.isupper() and enc > ord("Z")
                ):
                    enc -= 26

            # non letters are ignored
            else:
                enc = ord(letter)
            encoded_ascii.append(enc)

        # convert to text and join the letters back together to form the message
        return "".join([chr(char_code) for char_code in encoded_ascii])

    def decode(self, text: str) -> str:
        """
        Decode the passed text with the instance cipher key.

        :param text: The message to be decrypted
        :type text: str
        :return: The decrypted message
        :rtype: str
        """

        # create an instance of the key generator
        current_key = self.get_key()

        # iterate the text string, converting each letter
        # to it's ascii code and adding the next key from
        # the cypher to confuscate the word.
        decoded_ascii = list()
        for letter in text:
            # wrap letters as per the caesar cipher.
            if letter.isalpha():
                enc = ord(letter) - next(current_key)
                if (letter.islower() and enc < ord("a")) or (
                    letter.isupper() and enc < ord("A")
                ):
                    enc += 26

            # non letters are ignored
            else:
                enc = ord(letter)
            decoded_ascii.append(enc)

        # convert to text and join the letters back together to form the message
        return "".join([chr(char_code) for char_code in decoded_ascii])
