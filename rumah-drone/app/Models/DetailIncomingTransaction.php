<?php

namespace App\Models;

use App\Models\Stock;
use App\Models\IncomingTransaction;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DetailIncomingTransaction extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function incomingTransaction()
    {
        return $this->belongsTo(IncomingTransaction::class);
    }

    public function stock()
    {
        return $this->belongsTo(Stock::class);
    }
}
