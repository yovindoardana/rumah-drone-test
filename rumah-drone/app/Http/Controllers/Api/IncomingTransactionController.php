<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\IncomingTransaction;
use App\Http\Controllers\Controller;
use App\Models\DetailIncomingTransaction;

class IncomingTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return IncomingTransaction::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $incomingTransaction = IncomingTransaction::create([
            'transactionID' => "IT" . Carbon::now()->timestamp,
            'status' => 1
        ]);

        foreach ($request->stocks as $stock) {
            DetailIncomingTransaction::create([
                'incoming_transaction_id' => $incomingTransaction->id,
                'stock_id' => $stock['id'],
                'qty' => $stock['qty']
            ]);
        }

        return response()->json('Incoming Transaction Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
