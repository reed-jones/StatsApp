<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUptimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uptimes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('website_id')
                ->unsigned();
            $table->foreign('website_id')
                ->references('id')
                ->on('websites')
                ->onDelete('cascade');
            $table->integer('latency');
            $table->decimal('loadSpeed', 6, 4);
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
        Schema::dropIfExists('uptimes');
    }
}
