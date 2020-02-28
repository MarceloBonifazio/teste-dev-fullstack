<?php

use Illuminate\Database\Migrations\Migration;
/* use Illuminate\Database\Schema\Blueprint; */
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardsTable extends Migration
{
    protected $connection = 'mongodb';
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('about', 1000);
            $table->string('color', 7);
            $table->string('icon', 20);
            $table->enum('status', ['hire', 'active', 'deactive']);
            $table->string('title', 20);
            $table->enum('type', ['performance', 'engagement', 'culture', 'relations']);
            $table->decimal('amount', 13, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards');
    }
}
