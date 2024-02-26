<?php

namespace App\Models;

use App\Models\Stock;
use Illuminate\Database\Eloquent\Model;
use App\Models\DetailOutgoingTransaction;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OutgoingTransaction extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function detailOutgoingTransactions()
    {
        return $this->hasMany(DetailOutgoingTransaction::class);
    }

    public function stock()
    {
        return $this->belongsTo(Stock::class);
    }
}
