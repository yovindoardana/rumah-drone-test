<?php

namespace App\Models;

use App\Models\Stock;
use App\Models\OutgoingTransaction;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DetailOutgoingTransaction extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function outgoingTransaction()
    {
        return $this->belongsTo(OutgoingTransaction::class);
    }

    public function stock()
    {
        return $this->belongsTo(Stock::class);
    }
}
