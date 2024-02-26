<?php

namespace App\Http\Controllers\Api;

use App\Models\Stock;
use Illuminate\Http\Request;
use App\Models\IncomingTransaction;
use App\Http\Controllers\Controller;
use App\Models\DetailIncomingTransaction;

class DetailIncomingTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = IncomingTransaction::find($id);
        $detail = DetailIncomingTransaction::where('incoming_transaction_id', $id)->get();
        $stocks = [];

        foreach ($detail as $key => $value) {
            $key = $value->stock_id;
            $stock = [
                'id' => $key,
                'name' => $value->stock->name,
                'qty' => $value->qty
            ];
            $stocks[] = $stock;
        }

        $data->stocks = $stocks;

        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
