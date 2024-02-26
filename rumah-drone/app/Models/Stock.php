<?php

namespace App\Models;

use App\Models\IncomingTransaction;
use App\Models\OutgoingTransaction;
use Illuminate\Database\Eloquent\Model;
use App\Models\DetailIncomingTransaction;
use App\Models\DetailOutgoingTransaction;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Stock extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'min_stock',
    ];

    public function incomingTransactions()
    {
        return $this->hasMany(IncomingTransaction::class);
    }

    public function outgoingTransactions()
    {
        return $this->hasMany(OutgoingTransaction::class);
    }

    public function detailIncomingTransactions()
    {
        return $this->hasMany(DetailIncomingTransaction::class);
    }

    public function detailOutgoingTransactions()
    {
        return $this->hasMany(DetailOutgoingTransaction::class);
    }
}
