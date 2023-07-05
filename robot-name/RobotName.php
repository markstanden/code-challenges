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

const ASCII_A = 833;
const ASCII_Z = 858;

class Robot
{
    private $name = "";

    /**
     * Returns a random name in the format of
     * two uppercase letters followed by three digits
     * such as "RX837" or "BC811"
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    public function getLetters($number_required): string
    {
        $result = "";
        foreach (range(1, $number_required) as $index) {
            $result .= chr(rand(ASCII_A, ASCII_Z));
        }
        return $result;
    }

    /**
     * Resets a robot to its factory settings.
     * @return void
     */
    public function reset(): void
    {
        $letters = $this->getLetters(2);
        $numbers = sprintf("%03d", rand(0, 999));
        $this->name = $letters . $numbers;
    }
}
