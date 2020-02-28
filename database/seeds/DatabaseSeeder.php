<?php

use Illuminate\Database\Seeder;
use App\Models\ {
    Card,
};
use Faker\Generator as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        Card::create(
			[
				'about' => $faker->text($maxNbChars = 1000),
                'color' => '#222a35',
                'icon' => 'icon1',
                'id' => 1,
                'status' => $faker->randomElement(['hire','active','deactive']),
                'title' => 'Checkin & Checkout',
                'type' => 'performance',
                'amount' => $faker->randomFloat(2, 10, 1000),
            ]
        );
        Card::create(
			[
				'about' => $faker->text($maxNbChars = 1000),
                'color' => '#333f50',
                'icon' => 'icon2',
                'id' => 2,
                'status' => $faker->randomElement(['hire','active','deactive']),
                'title' => 'Badges & Cards de Reconhecimento',
                'type' => 'engagement',
                'amount' => null,
            ]
        );
        Card::create(
			[
				'about' => $faker->text($maxNbChars = 1000),
                'color' => '#525252',
                'icon' => 'icon3',
                'id' => 3,
                'status' => $faker->randomElement(['hire','active','deactive']),
                'title' => 'Planos de Ação',
                'type' => 'engagement',
                'amount' => null,
            ]
        );
        Card::create(
			[
				'about' => $faker->text($maxNbChars = 1000),
                'color' => '#7f6000',
                'icon' => 'icon4',
                'id' => 4,
                'status' => $faker->randomElement(['hire','active','deactive']),
                'title' => 'Recomendações de Conteúdo sob medida',
                'type' => 'engagement',
                'amount' => $faker->randomFloat(2, 10, 1000),
            ]
        );
        Card::create(
			[
				'about' => $faker->text($maxNbChars = 1000),
                'color' => '#c55a11',
                'icon' => 'icon5',
                'id' => 5,
                'status' => $faker->randomElement(['hire','active','deactive']),
                'title' => 'Fitting Cultural',
                'type' => 'culture',
                'amount' => $faker->randomFloat(2, 10, 1000),
            ]
        );
        Card::create(
			[
				'about' => $faker->text($maxNbChars = 1000),
                'color' => '#7c7c7c',
                'icon' => 'icon6',
                'id' => 6,
                'status' => $faker->randomElement(['hire','active','deactive']),
                'title' => 'Assessments e Recomendações',
                'type' => 'relations',
                'amount' => null,
            ]
        );
        Card::create(
			[
				'about' => $faker->text($maxNbChars = 1000),
                'color' => '#00b0f0',
                'icon' => 'icon7',
                'id' => 7,
                'status' => $faker->randomElement(['hire','active','deactive']),
                'title' => 'Quick Deck',
                'type' => 'performance',
                'amount' => $faker->randomFloat(2, 10, 1000),
            ]
        );
        Card::create(
			[
				'about' => $faker->text($maxNbChars = 1000),
                'color' => '#002060',
                'icon' => 'icon8',
                'id' => 8,
                'status' => $faker->randomElement(['hire','active','deactive']),
                'title' => 'Evidências & Feedback',
                'type' => 'performance',
                'amount' => $faker->randomFloat(2, 10, 1000),
            ]
        );
        /* Card::create(
			[
				'about' => $faker->text($maxNbChars = 1000),
                'color' => '#222a35',
                'icon' => 'icon1',
                'status' => $faker->randomElement(['hire','active','deactive']),
                'title' => 'Checkin & Checkout',
                'type' => $faker->randomElement(['performance', 'engagement', 'culture', 'relations']),
                'amount' => rand(0,10) ? $faker->randomFloat(2, 10, 1000) : null,
            ]
        );
        factory(Card::class, 10)->create(); */
        // $this->call(UsersTableSeeder::class);
    }
}
