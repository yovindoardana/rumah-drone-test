<?php

namespace App\Http\Controllers\Api;

use App\Models\Stock;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\DetailIncomingTransaction;
use App\Models\DetailOutgoingTransaction;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Stock::all();
        $data_incoming = DetailIncomingTransaction::groupBy('stock_id')->selectRaw('stock_id, sum(qty) as total')->get();
        $data_outgoing = DetailOutgoingTransaction::groupBy('stock_id')->selectRaw('stock_id, sum(qty) as total')->get();
        $stock = [];
        foreach ($data as $key => $value) {
            if (Count($data_incoming->where('stock_id', $value->id)) > 0) {
                $value->incoming = (int) $data_incoming->where('stock_id', $value->id)->first()->total ?? 0;
            } else {
                $value->incoming = 0;
            }

            if (Count($data_outgoing->where('stock_id', $value->id)) > 0) {

                $value->outgoing = (int) $data_outgoing->where('stock_id', $value->id)->first()->total ?? 0;
            } else {
                $value->outgoing = 0;
            }
            $value->total = $value->incoming - $value->outgoing ?? 0;
            $stock[] = $value;
        }


        return $stock;
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
        $request->validate([
            'name' => 'required',
            'min_stock' => 'required',
        ]);

        $data = Stock::create($request->all());
        if ($data) {
            return response()->json([
                'success' => true,
                'message' => 'Stock Added!',
                'data' => $data
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Stock::find($id);
        if ($data) {
            return response()->json([
                'success' => true,
                'message' => 'Stock Found!',
                'data' => $data
            ]);
        }
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

        $data = Stock::find($id);

        if ($data) {
            $data->update([
                'name' => $request->name,
                'min_stock' => $request->min_stock
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Stock Updated!',
                'data' => $data
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Stock Not Found!',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Stock::find($id);
        if ($data) {
            $data->delete();
            return response()->json([
                'success' => true,
                'message' => 'Stock Deleted!',
            ]);
        }
    }
}
