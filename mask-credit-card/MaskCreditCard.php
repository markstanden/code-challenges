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

function maskify(string $cc): string
{
    if (strlen($cc) < 6) {
        return $cc;
    }
    /**
     * Regex pattern with multiple capture groups for each of the groups of
     * digits to be used or obscured.  Also captures the hyphens, if present.
     * @var $strict_pattern
     */
    $strict_pattern = '/(^\d)(\d{3})(-?)(\d{4})(-?)(\d{4})$/';
    $replacement = '$1###$3####$5$6';
    return preg_replace($strict_pattern, $replacement, $cc);
}
