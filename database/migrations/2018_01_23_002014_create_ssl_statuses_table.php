<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSslStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ssl_statuses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('website_id')
                ->unsigned();
            $table->foreign('website_id')
                ->references('id')
                ->on('websites')
                ->onDelete('cascade');
            $table->boolean('valid')
                ->default(false);
            $table->string('issuer')
                ->nullable();
            $table->integer('days_left')
                ->nullable();
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
        Schema::dropIfExists('ssl_statuses');
    }
}
