<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response([
                'success' => false,
                'message' => ['These credentials do not match our records.']
            ], 404);
        }

        $token = $user->createToken('Api-token')->plainTextToken;

        $response = [
            'success' => true,
            'user' => $user,
            'token' => $token,
            'message' => 'Berhasil Login'
        ];

        return response($response, 201);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required',
            'confirm-password' => 'required|same:password'
        ]);

        $data = $request->except('confirm-password', 'password');
        $data['password'] = Hash::make($request->password);

        $user = User::create($data);
        $token = $user->createToken('auth_token')->plainTextToken;

        $response = [
            'success' => true,
            'user' => $user,
            'token' => $token,
            'message' => 'Berhasil Register'
        ];
        return response($response, 201);
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        $response = [
            'success' => true,
            'message' => 'Berhasil Logout'
        ];
        return response($response, 200);
    }
}
