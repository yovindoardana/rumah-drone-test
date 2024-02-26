<?php

namespace Database\Seeders;

use App\Models\IncomingTransaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IncomingTransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        IncomingTransaction::create([
            'transactionID' => 'IT001',
            'status' => 1
        ]);

        IncomingTransaction::create([
            'transactionID' => 'IT002',
            'status' => 2
        ]);

        IncomingTransaction::create([
            'transactionID' => 'IT003',
            'status' => 3
        ]);
    }
}
