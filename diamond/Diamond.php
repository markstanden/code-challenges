<?php
declare(strict_types=1);

function diamond(string $letter): array
{
    $letter_number = ord(strtoupper($letter)[0]) - (ord('A') - 1);
    $number_of_rows = ($letter_number * 2) - 1;
    echo "Expected number of rows: " . $number_of_rows . "\n";

    $result_array = [];
    //$result_array = [$letter[0] . str_repeat(" ", $number_of_rows) . $letter[0]];

    for ($current_letter = ord($letter[0]); $current_letter >= ord('A'); --$current_letter) {
        echo "Current Letter: " . chr($current_letter) . "\n";
        $line = chr($current_letter);

        // Add the line to the top of the diamond.
        array_unshift($result_array, $line);

        // Repeat the line underneath if it is not the middle letter.
        if ($current_letter != ord($letter[0])) array_push($result_array, $line);
    }

    echo print_r($result_array);
    return $result_array;
}
