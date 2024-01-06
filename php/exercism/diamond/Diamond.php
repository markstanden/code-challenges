<?php
declare(strict_types=1);

function diamond(string $letter): array
{
    $result_array = [];
    /** The ordinal "code-point" value of the character A
     * @const $code_point_A
     */
    $code_point_A = ord('A');

    /**
     * The ordinal value of the $letter that makes up the widest point of the diamond.
     * @const $code_point_max
     */
    $code_point_max = ord($letter[0]);

    /**
     * The total width in characters of the diamond.
     * @var $total_width
     */
    $total_width = (2 * ($code_point_max - ($code_point_A - 1)) - 1);

    for ($current_letter_code = $code_point_max; $current_letter_code >= $code_point_A; --$current_letter_code) {

        $letter_number = ($current_letter_code - $code_point_A); // A=0, B=1 etc.

        $between = (2 * $letter_number) - 1; // Will be -1 for 'A'
        $before = $after = ($total_width - $between - 2) / 2;

        $line = str_repeat(" ", $before)
            . chr($current_letter_code);

        // $between will be -1 for 'A', and we don't need a gap as there is only one
        // char to display on this line.
        if ($between > 0) {
            $line .= str_repeat(" ", $between)
                . chr($current_letter_code);
        }

        // Add the blank spaces required to the end of the line.
        $line .= str_repeat(" ", $after);

        // Add the line to the top of the diamond.
        array_unshift($result_array, $line);

        // Repeat the line underneath unless it's the middle letter.
        if ($current_letter_code != $code_point_max) array_push($result_array, $line);
    }

    return $result_array;
}
