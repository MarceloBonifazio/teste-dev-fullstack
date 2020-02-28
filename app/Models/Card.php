<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Card extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'cards';

    protected $primaryKey = 'id';
    
    protected $fillable = [
        'about', 'color', 'icon', 'status', 'title', 'type', 'amount', 'id'
    ];
}
