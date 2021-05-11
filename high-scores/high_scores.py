def latest(scores: list) -> int:
    # return the last element in the list
    return scores[-1]


def personal_best(scores: list[int]) -> int:
    # max returns the largest item within an iterable
    return max(scores)

def personal_top_three(scores: list[int]) -> list[int]:
    # sort the list and return the first three entries
    sorted_scores = sorted(scores, reverse=True)
    return sorted_scores[:3]