<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\StockController;
use App\Http\Controllers\Api\IncomingTransactionController;
use App\Http\Controllers\Api\OutgoingTransactionController;
use App\Http\Controllers\Api\DetailIncomingTransactionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/stocks', [StockController::class, 'index']);
    Route::post('/stocks', [StockController::class, 'store']);
    Route::get('/stocks/{id}', [StockController::class, 'show']);
    Route::put('/stocks/{id}', [StockController::class, 'update']);
    Route::delete('/stocks/{id}', [StockController::class, 'destroy']);

    Route::get('/incoming-transactions', [IncomingTransactionController::class, 'index']);
    Route::post('/incoming-transactions', [IncomingTransactionController::class, 'store']);
    Route::get('/outgoing-transactions', [OutgoingTransactionController::class, 'index']);
    Route::post('/outgoing-transactions', [OutgoingTransactionController::class, 'store']);

    Route::get('/detail-incoming-transaction/{id}', [DetailIncomingTransactionController::class, 'show']);

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register']);
