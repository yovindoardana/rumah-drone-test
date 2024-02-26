<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DetailIncomingTransaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DetailIncomingTransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DetailIncomingTransaction::create([
            'incoming_transaction_id' => 1,
            'stock_id' => 1,
            'qty' => 100
        ]);

        DetailIncomingTransaction::create([
            'incoming_transaction_id' => 1,
            'stock_id' => 2,
            'qty' => 100
        ]);

        DetailIncomingTransaction::create([
            'incoming_transaction_id' => 2,
            'stock_id' => 1,
            'qty' => 100
        ]);
    }
}
