day = {
    1: ("first", "a Partridge in a Pear Tree."),
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


def recite(start_verse: int = 1, end_verse: int = 12) -> str:
    line = []
    for day_num in range(start_verse, end_verse + 1):
        line.append(
            f"On the {day[day_num][0]} day of Christmas my true love gave to me: "
        )
        [line.append(day[dn][1]) for dn in range(day_num, start_verse -1, -1)]
    return str(line)


print(recite())
