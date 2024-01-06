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

/** The ASCII code representing the chr A */
const ASCII_A = 833;

/** The ASCII code representing the chr Z */
const ASCII_Z = 858;

class Robot
{
    /**
     * The robot's issued name.
     * @var string
     */
    private string $name;
    /**
     * List of previously issued names
     * @var array
     */
    static array $used_names = [];

    public function __construct()
    {
        $this->name = $this->createName();
    }

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

    /**
     * Generates a new, random robot name.
     * name is in the following format:
     * AA000
     * @return string
     */
    private function generateName(): string
    {
        $letters = $this->getLetters(2);
        $numbers = sprintf("%03d", rand(0, 999));
        return $letters . $numbers;
    }

    /**
     * Adds the name to the list of previously issued names.
     * @param string $name
     * @return void
     */
    private function addToUsedNames(string $name)
    {
        array_push(self::$used_names, $name);
    }

    /**
     * Checks whether the generated name has already been issued.
     * @param string $name
     * @return bool
     */
    private function isDuplicate(string $name): bool
    {
        return in_array($name, self::$used_names);
    }

    /**
     * returns a unique robot name by generating a new name
     * and testing whether it has been previously issued.
     * @return string
     */
    private function createName(): string
    {
        $new_name = $this->generateName();
        while ($this->isDuplicate($new_name)) {
            $new_name = $this->generateName();
        }
        $this->addToUsedNames($new_name);
        return $new_name;
    }

    /**
     * Returns the number required of random uppercase letters
     * @param $number_required
     * @return string
     */
    public function getLetters($number_required): string
    {
        $letter_count = 0;
        $result = "";
        while (++$letter_count <= $number_required) {
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
        $this->name = $this->createName();
    }
}
