<?php

namespace Database\Seeders;

use App\Models\Stock;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Stock::create([
            'name' => 'Stock 1',
            'min_stock' => 10
        ]);

        Stock::create([
            'name' => 'Stock 2',
            'min_stock' => 20
        ]);
    }
}
