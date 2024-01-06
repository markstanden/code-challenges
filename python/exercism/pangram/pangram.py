def is_pangram(sentence):

    # create a set of the given characters within the sentence
    letters_present = set(sentence.lower())

    # create a set of the letters of the alphabet
    required_chars = set("abcdefghijklmnopqrstuvwxyz")
    
    # return true if the letters present in the sentence are
    # a subset of the alphabet
    return required_chars.issubset(letters_present)
