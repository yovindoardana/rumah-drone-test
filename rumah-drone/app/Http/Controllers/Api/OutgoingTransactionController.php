<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\OutgoingTransaction;
use App\Http\Controllers\Controller;
use App\Models\DetailOutgoingTransaction;

class OutgoingTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return OutgoingTransaction::all();
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
        $outgoingTransaction = OutgoingTransaction::create([
            'transactionID' => "OT" . Carbon::now()->timestamp,
            'status' => 1
        ]);

        foreach ($request->stocks as $stock) {
            DetailOutgoingTransaction::create([
                'outgoing_transaction_id' => $outgoingTransaction->id,
                'stock_id' => $stock['id'],
                'qty' => $stock['qty']
            ]);
        }

        return response()->json('Outgoing Transaction Created');
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
