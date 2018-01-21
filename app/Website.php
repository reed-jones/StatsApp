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
}
