<?php

declare(strict_types=1);

class Lasagna
{
    /** @var int The value of the expected cook-time, provided by the recipe. */
    const EXPECTED_COOK_TIME = 40; // Minutes

    /** @var int The average preparation time required for each layer of the lasagne. */
    const AVERAGE_LAYER_PREP_TIME = 2; // Minutes

    /**
     * Returns the expected cook-time of the lasagne,
     * based on the value provided in the recipe.
     * @return int
     */
    function expectedCookTime(): int
    {
        return self::EXPECTED_COOK_TIME;
    }

    /**
     * Returns the remaining time required in the oven.
     * @param int $current_cook_time
     * @return int
     */
    function remainingCookTime(int $current_cook_time): int
    {
        return $this->expectedCookTime() - $current_cook_time;
    }

    /**
     * Returns the estimated preparation time based on the number of layers,
     * and the average prep time per layer.
     * @param int $layers_to_prep
     * @return int
     */
    function totalPreparationTime(int $layers_to_prep): int
    {
        return $layers_to_prep * self::AVERAGE_LAYER_PREP_TIME;
    }

    /**
     * Returns the total elapsed time so far.
     * @param int $layers_to_prep
     * @param int $elapsed_minutes
     * @return int
     */
    function totalElapsedTime(int $layers_to_prep, int $elapsed_minutes): int
    {
        return $this->totalPreparationTime($layers_to_prep) + $elapsed_minutes;
    }


    /**
     * Returns a notification that the lasagne is ready.
     * @return string
     */
    function alarm(): string
    {
        return "Ding!";
    }
}
