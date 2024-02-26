<?php

namespace App\Models;

use App\Models\Stock;
use Illuminate\Database\Eloquent\Model;
use App\Models\DetailIncomingTransaction;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class IncomingTransaction extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function detailIncomingTransactions()
    {
        return $this->hasMany(DetailIncomingTransaction::class);
    }

    public function stock()
    {
        return $this->belongsTo(Stock::class);
    }
}
