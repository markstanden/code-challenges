def find_anagrams(main_word: str, candidates: list[str]) -> list[str]:
    """
    Return a list of valid anagrams of the supplied main_word from a list of candidate words

    :param main_word: The string to check for anagrams
    :type main_word: str
    :param candidates: A list of strings each of which is will be checked as a potential anagram of "word"
    :type candidates: list[str]
    :return: A filtered list of the candidate strings, with only valid anagrams present
    :rtype: list[str]
    """

    # remove duplicates from the candidate list, new list retains original case.
    cleaned_candidates = [
        word for word in candidates if word.lower() != main_word.lower()
    ]

    # get the letter count of the master word.
    main_letter_count = get_letter_count(main_word)

    # if the candidate word is an anagram of the master word, the letter_count will be identical.
    # new list must retain case of candidate words
    anagrams = [
        word
        for word in cleaned_candidates
        if get_letter_count(word) == main_letter_count
    ]

    return anagrams


def get_letter_count(word: str) -> dict[str, int]:
    """
    Return a count of all the letters present the the passed word

    :param word: The word to be split and the letters counted.
    :type word: str
    :return: returns a dictionary of lowercase letters representing all of the letters with the passed word
    :rtype: dict[str]:int
    """
    # initialise a new dictionary to save the count
    letter_count: dict[str, int] = {}

    # clean the word, removing non alphabetic characters
    clean_word = [letter.lower() for letter in word if letter.isalpha()]

    # iterate the clean list, and add each entry to the dictionary, increment if the letter is already present
    for letter in clean_word:
        letter_count[letter] = letter_count.get(letter, 0) + 1

    # return the letter count
    return letter_count
