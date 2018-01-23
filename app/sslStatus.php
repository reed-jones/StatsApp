<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class sslStatus extends Model
{
    /**
     * Get the website that owns this status.
     */
    public function website()
    {
        return $this->belongsTo('App\Website');
    }
}
