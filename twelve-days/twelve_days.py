def recite(start_verse: int = 1, end_verse: int = 12) -> list[str]:
    """
    Return a excerpt from the twelve days of christmas song.

    :param start_verse: The first verse of the song to start the excerpt from, defaults to 1
    :type start_verse: int, optional
    :param end_verse: The final verse of the excerpt, defaults to 12
    :type end_verse: int, optional
    :return: A list containing each line of the excerpt.
    :rtype: list[str]
    """

    # the base text for the
    song_phrase = {
        1: ("first", "and a Partridge in a Pear Tree."),
        2: ("second", "two Turtle Doves"),
        3: ("third", "three French Hens"),
        4: ("fourth", "four Calling Birds"),
        5: ("fifth", "five Gold Rings"),
        6: ("sixth", "six Geese-a-Laying"),
        7: ("seventh", "seven Swans-a-Swimming"),
        8: ("eighth", "eight Maids-a-Milking"),
        9: ("ninth", "nine Ladies Dancing"),
        10: ("tenth", "ten Lords-a-Leaping"),
        11: ("eleventh", "eleven Pipers Piping"),
        12: ("twelfth", "twelve Drummers Drumming"),
    }

    # initialise the list to hold the lines of the song
    all_lines = list()

    # for each line of the excerpt.
    for day_number in range(start_verse, end_verse + 1):
        # add the start of the line with the ordinal number inserted
        current_day = f"On the {song_phrase[day_number][0]} day of Christmas my true love gave to me: "

        # day 1 doesn't have the "and " at the start of the partridge in a pear tree line, so remove it.
        if day_number == 1:
            current_day += song_phrase[1][1].removeprefix("and ")
        # for all the other lines
        else:
            current_day += ", ".join(
                # cycle backwards through the days adding the phrase for each day
                [song_phrase[past_days][1] for past_days in range(day_number, 0, -1)]
            )
        # add the whole line for the day to the main list.
        all_lines.append(current_day)
    return all_lines