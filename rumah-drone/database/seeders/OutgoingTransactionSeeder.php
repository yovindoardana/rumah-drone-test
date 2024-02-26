<?php

namespace Database\Seeders;

use App\Models\OutgoingTransaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OutgoingTransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OutgoingTransaction::create([
            'transactionID' => 'OT001',
            'status' => 1
        ]);

        OutgoingTransaction::create([
            'transactionID' => 'OT002',
            'status' => 2
        ]);

        OutgoingTransaction::create([
            'transactionID' => 'OT003',
            'status' => 3
        ]);
    }
}
