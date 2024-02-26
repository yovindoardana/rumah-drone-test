<?php

namespace Database\Seeders;

use App\Models\DetailOutgoingTransaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DetailOutgoingTransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DetailOutgoingTransaction::create([
            'outgoing_transaction_id' => 1,
            'stock_id' => 1,
            'qty' => 100
        ]);

        DetailOutgoingTransaction::create([
            'outgoing_transaction_id' => 1,
            'stock_id' => 2,
            'qty' => 100
        ]);

        DetailOutgoingTransaction::create([
            'outgoing_transaction_id' => 2,
            'stock_id' => 1,
            'qty' => 100
        ]);
    }
}
