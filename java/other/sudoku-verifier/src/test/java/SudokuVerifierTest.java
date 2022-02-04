import BaseTests.ConsoleTest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SudokuVerifierTest extends ConsoleTest {

    public static final int [][] VALID = {  {2,4,1, 6,9,5,  3,8,7},
                                            {7,3,5, 4,2,8,  1,6,9},
                                            {8,6,9, 7,3,1,  4,2,5},

                                            {4,1,3, 8,7,9,  2,5,6},
                                            {6,9,2, 5,1,3,  7,4,8},
                                            {5,8,7, 2,4,6,  9,3,1},

                                            {1,7,8, 3,6,4,  5,9,2},
                                            {9,5,4, 1,8,2,  6,7,3},
                                            {3,2,6, 9,5,7,  8,1,4}};

    public static final int [][] INVALID = {{2,4,1, 6,9,5,  3,8,1},
                                            {7,3,5, 4,2,8,  1,6,9},
                                            {8,6,9, 7,3,1,  4,2,5},
                                            {4,1,3, 8,7,9,  2,5,6},
                                            {6,9,2, 5,2,3,  7,4,8},
                                            {5,8,7, 2,4,6,  9,3,1},
                                            {1,7,8, 3,6,4,  5,9,2},
                                            {8,5,4, 1,8,2,  6,7,3},
                                            {3,2,6, 9,5,7,  8,1,4}};

    SudokuVerifier sudokuVerifier;

    @BeforeEach
    public void setUp() {
        super.setUp();
        sudokuVerifier = new SudokuVerifier();
    }

    @Test
    public void EndToEndValid(){
        boolean result = sudokuVerifier.check(SudokuVerifierTest.VALID);
        assertTrue(result);
    }

    @Test
    public void EndToEndInvalid(){
        boolean result = sudokuVerifier.check(SudokuVerifierTest.INVALID);
        assertFalse(result);
    }
}