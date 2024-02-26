<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\StockSeeder;
use Database\Seeders\IncomingTransactionSeeder;
use Database\Seeders\OutgoingTransactionSeeder;
use Database\Seeders\DetailIncomingTransactionSeeder;
use Database\Seeders\DetailOutgoingTransactionSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(UserSeeder::class);
        $this->call(StockSeeder::class);
        $this->call(IncomingTransactionSeeder::class);
        $this->call(OutgoingTransactionSeeder::class);
        $this->call(DetailIncomingTransactionSeeder::class);
        $this->call(DetailOutgoingTransactionSeeder::class);
    }
}
