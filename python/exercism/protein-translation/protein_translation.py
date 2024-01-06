codon_lookup = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "UAA": "stop",
    "UAG": "stop",
    "UGA": "stop",
}


def proteins(strand: str) -> list[str]:
    """
    Return a string representing the codons within a supplied RNA string
    """

    # Split the strand into a list of three character sections
    split_strand = [strand[i : i + 3] for i in range(0, len(strand) - 2, 3)]

    # convert the codons to human readable strings
    descriptions = [codon_lookup[codon] for codon in split_strand]

    # if stop present return the descriptions up until the entry
    if "stop" in descriptions:
        return descriptions[: descriptions.index("stop")]

    # otherwise return the full list
    return descriptions
