<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Website extends Model
{
    /**
     * Get the user that owns the wesbite.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the websites belonging to the user.
     */
    public function sslAll()
    {
        return $this->hasMany('App\sslStatus');
    }

    /**
     * Get the websites belonging to the user.
     */
    public function sslLatest()
    {
        return $this->hasOne('App\sslStatus')->latest();
    }

    /**
     * Get the websites belonging to the user.
     */
    public function uptimeAll()
    {
        return $this->hasMany('App\Uptime');
    }
}
