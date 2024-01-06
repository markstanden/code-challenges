<?php

/*
 * By adding type hints and enabling strict type checking, code can become
 * easier to read, self-documenting and reduce the number of potential bugs.
 * By default, type declarations are non-strict, which means they will attempt
 * to change the original type to match the type specified by the
 * type-declaration.
 *
 * In other words, if you pass a string to a function requiring a float,
 * it will attempt to convert the string value to a float.
 *
 * To enable strict mode, a single declare directive must be placed at the top
 * of the file.
 * This means that the strictness of typing is configured on a per-file basis.
 * This directive not only affects the type declarations of parameters, but also
 * a function's return type.
 *
 * For more info review the Concept on strict type checking in the PHP track
 * <link>.
 *
 * To disable strict typing, comment out the directive below.
 */

declare(strict_types=1);

const NUMERALS_TENS = [
    1000 => "M",
    100 => "C",
    10 => "X",
    1 => "I",
];
const NUMERALS_FIVES = [
    "C" => "D",
    "X" => "L",
    "I" => "V",
];
function toRoman(int $number): string
{
    $numerals = "";
    $values_as_powers_of_ten = convertToPowersOf10($number);
    foreach ($values_as_powers_of_ten as $ten => $quantity) {
        $this_numeral = NUMERALS_TENS[$ten];

        if ($quantity) {
            if ($quantity <= 3) {
                // We don't need a half-numeral yet, so multiply by the quantity.
                $numerals .= str_repeat($this_numeral, $quantity);
                
            } elseif ($quantity <= 8) {
                // Get the next half-numeral
                $five_numerals = NUMERALS_FIVES[$this_numeral];

                // Calculate the number of numerals before (-ve) or after (+ve) the 5x numeral
                $numerals_before_after = $quantity - 5;

                // Create the amount of the current numeral to prefix/suffix
                $the_numerals = str_repeat($this_numeral, abs($numerals_before_after));
                $numerals .= $numerals_before_after > 0
                    ? $five_numerals . $the_numerals    // suffix the numerals on the half-numeral
                    : $the_numerals . $five_numerals;   // prefix the numerals on the half-numeral

            } else {
                // get the next big numeral
                $ten_numerals = NUMERALS_TENS[$ten * 10];
                
                // prefix it with one of the current numeral.
                $numerals .= $this_numeral . $ten_numerals;
            }
        }
    }
    return $numerals;
}

/**
 * return the value as an associative array of
 * powers of ten and the quantities within value.
 * @param int $number
 * @return array
 */
function convertToPowersOf10(int $number): array
{
    $as_numerals = [];
    $remainder = $number;
    foreach (NUMERALS_TENS as $decimal => $roman) {
        while ($remainder >= $decimal) {
            $remainder -= $decimal;
            array_key_exists($decimal, $as_numerals) ? $as_numerals[$decimal]++ : $as_numerals[$decimal] = 1;
        }
    }
    return $as_numerals;
}
