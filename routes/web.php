<?php

use App\Http\Controllers\Api\TranslationController;
use App\Http\Resources\TranslationResource;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
})->name('index');

Route::get('/list-translations', [TranslationController::class,"listTranslations"])->name('listTranslations');


Route::resource('translations', TranslationController::class);