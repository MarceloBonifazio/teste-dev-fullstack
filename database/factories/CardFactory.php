<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Card;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Card::class, function (Faker $faker) {
    return [
        'about' => $faker->text($maxNbChars = 1000),
        'amount' => rand(0,10) ? $faker->randomFloat(2, 10, 100000) : null,
        'color' => $faker->hexcolor,
        'icon' => $faker->text($maxNbChars = 20),
        'id' => $faker->randomNumber(1000),
        'status' => $faker->randomElement(['hire','active','deactive']),
        'title' => $faker->text($maxNbChars = 20),
        'type' => $faker->randomElement(['performance', 'engagement', 'culture', 'relations']),
    ];
});
