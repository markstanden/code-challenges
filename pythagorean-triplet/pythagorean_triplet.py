#https://en.wikipedia.org/wiki/Pythagorean_triple

# where m > n
import math
import timeit

def matrix_triplets_with_sum(number: int)-> list[list[int]]:
    """
    Return a list of pythagorean triplets whose sum equal the supplied number.

    The base triplets can be produced using matrix multiplication, and then multiples of each base triplet can be checked to see if they match the target

    :param number: the target sum of the triples to e returned
    :type number: int
    :return: a list of a list of pythogorean triples, whos individual sum equals the supplies target value.
    :rtype: list[list[int]]
    """
    
    # all of the subsequent triplets are calculated from the first, base triplet, the classic 3,4,5 triangle.
    original_triplet = [3,4,5]

    return list()

def triplets_with_sum(number: int)-> list[list[int]]:
    """
    where m and n are odd integers, where m>n
    a=mn
    b=(m**2-n**2)
    c=(m**2+n**2)
    """
    potential_triplets = list()
    # It is a little faster to declare the max value first
    max = int(number/16)
    for m in range(1, max):
        
        # b * b was four times faster than **2 in my tests and imo just as readable
        m_sq = m * m
        
        for n in range(2, m):
            n_sq = n * n
   
            a = (2 * m * n)
            b = (m_sq - n_sq)
            c = (m_sq + n_sq)
            k = 1
            
            while a + b <= number/2:
                a *= k
                b *= k
                c *= k
                print(a,b,c, k)
                triplet = [a, b, c]
                if sum(triplet) <= number:
                    triplet.sort
                    potential_triplets.append(triplet)
                
                k += 1
                
    return potential_triplets

    

def obvious_triplets_with_sum(number: int)-> list[list[int]]:
    """
    Return a list of pythagorean triplets whose sum equals the supplied number.
    
    This method uses nested loops and is quite ineffecient.
    I have run tests to optimise this method for speed as much as possible
    """
    potential_triplets = list()
    # It is a little faster to declare the max value first
    max = int(number / 2)
    for b in range(2, max):
        
        # b * b was four times faster than **2 in my tests and imo just as readable
        b_sq = b * b
        
        for a in range(1, b):
            
            a_sq = a * a
            c_sq = a_sq + b_sq
          
            # marginally faster, but imo also more readable
            c = math.sqrt(c_sq)
            
            if c % 1 < 0.0001:
                if a < b and b < round(c):
                    triplet = [a, b, round(c)]
                    if sum(triplet) == number:
                        potential_triplets.append(triplet)
                        
    return potential_triplets

if __name__ == "__main__":
    test_iterations = 1000
    a = 345234
    
    print(triplets_with_sum(12))
    print(obvious_triplets_with_sum(12))
    
    # test the speed of squaring a number
    a_x_a = timeit.timeit("a*a", number=test_iterations, globals=globals())
    a_xx_2 = timeit.timeit("a**2", number=test_iterations, globals=globals())
    print(f"{(a_x_a/a_xx_2)*100}%") # ~25% - considerably faster
    
    # test the speed of rooting a number
    sqrt_a = timeit.timeit("math.sqrt(a)", number=test_iterations, globals=globals())
    a_xx_05 = timeit.timeit("a**0.5", number=test_iterations, globals=globals())
    pow_a_05 = timeit.timeit("pow(a, 0.5)", number=test_iterations, globals=globals())
    
    print(f"{(sqrt_a/a_xx_05)*100}%") # ~95-100% - marginally faster, but requires an import
    print(f"{(sqrt_a/pow_a_05)*100}%") # ~75% 
    
    #print("obvious way:", timeit.timeit("obvious_triplets_with_sum(500)", number=test_iterations, globals=globals()))
    #print("euclid way:", timeit.timeit("triplets_with_sum(500)", number=test_iterations, globals=globals()))