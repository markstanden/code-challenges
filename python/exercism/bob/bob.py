def response(hey_bob: str) -> str:
    """
    Return a set phase dependant on the case and presence of a question mark.

    :param hey_bob: The phrase sent to 'Bob'
    :type hey_bob: str
    :return: Bob's reply
    :rtype: str
    """
    silence = "Fine. Be that way!"
    # (CAPS reply, lowercase reply)
    question = ("Calm down, I know what I'm doing!", "Sure.")
    statement = ("Whoa, chill out!", "Whatever.")

    # strip excess whitespace from the question
    hey_bob = hey_bob.strip()

    # if hey_bob is empty (falsey)
    if not hey_bob:
        return silence

    # boolean to indicate whether the passed phrase is a question.
    is_question = False
    if hey_bob[-1] == "?":
        is_question = True

    # if there are no alpha numeric characters and it is not a question.
    if not is_question and not is_alphanumeric(hey_bob):
        return silence

    # if the phrase is all caps
    if hey_bob.isupper():
        return question[0] if is_question else statement[0]

    # phrase is no all caps
    return question[1] if is_question else statement[1]


def is_alphanumeric(phrase: str) -> bool:
    """
    Return True if phase contains any alphanumeric characters.

    :param phrase: The phrase to test
    :type phrase: str
    :return: True if alphanumeric characters are present at all within the string.  False returned if string contains no alphanumeric content.
    :rtype: bool
    """

    # Create a list of all of the alphanumeric characters within the phrase.
    return len([letter for letter in phrase if letter.isalnum()]) > 0
