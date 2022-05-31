<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::group([
//
//    'middleware' => 'api',
//    'namespace' => 'App\Http\Controllers',
//    'prefix' => 'auth'
//
//], function ($router) {
//
//    Route::post('login', [AuthController::class, 'login']);
//    Route::post('logout', 'AuthController@logout');
//    Route::post('refresh', 'AuthController@refresh');
//    Route::post('me', [AuthController::class, 'me']);
//
//    Route::middleware('auth:api')->group(function () {
//        // Get user info
//        Route::get('user', 'AuthController@user');
//        // Logout user from application
//        Route::post('logout', 'AuthController@logout');
//    });
//
//});


    Route::prefix('auth')->group(function () {
        // Below mention routes are public, user can access those without any restriction.
        // Create New User
        Route::post('register', [AuthController::class, 'register']);
        // Login User
        Route::post('login', [AuthController::class, 'login']);
        Route::get('user', [AuthController::class, 'user']);

        // Refresh the JWT Token
        Route::get('refresh', [AuthController::class, 'refresh']);

        // Below mention routes are available only for the authenticated users.
        Route::middleware('auth:api')->group(function () {
            // Get user info

            // Logout user from application
            Route::post('logout', [AuthController::class, 'logout']);
        });
    });
