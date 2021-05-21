#https://en.wikipedia.org/wiki/Pythagorean_triple

# where m > n
import math
import timeit

def triplets_with_sum(number: int)-> list[list[int]]:
    return list()


def obvious_triplets_with_sum(number: int)-> list[list[int]]:
    potential_triplets = list()
    max = int(number / 2)
    for b in range(2, max):
        b_sq = b * b
        for a in range(1, b):
            a_sq = a * a
            c_sq = a_sq + b_sq
          
            c = math.sqrt(c_sq)
            
            if c % 1 < 0.0001:
                if a < b and b < round(c):
                    triplet = [a, b, round(c)]
                    if sum(triplet) == number:
                        potential_triplets.append(triplet)
                        
    return potential_triplets

if __name__ == "__main__":
    print("obvious way:", timeit.timeit("obvious_triplets_with_sum(500)", number=1000, globals=globals()))
    print("matrix way:", timeit.timeit("triplets_with_sum(500)", number=1000, globals=globals()))