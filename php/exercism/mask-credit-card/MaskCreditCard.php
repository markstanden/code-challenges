<?php

declare(strict_types=1);

function maskify(string $full_number): string
{
    // If the input string is too short, return early.
    if (strlen($full_number) < 6) {
        return $full_number;
    }

    // Break the input string into its constituent parts.
    $first = $full_number[0];
    $to_mask = substr($full_number, 1, -4);
    $last_four = substr($full_number, -4);

    // regex pattern to match digits only.
    $digits_only = "/\d/";
    $masked = preg_replace($digits_only, "#", $to_mask);

    // recombine with masked section.
    return $first . $masked . $last_four;
}
