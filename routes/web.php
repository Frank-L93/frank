<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Http\Controllers\ChessController;
use App\Http\Controllers\SwissMasterController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'designed' => true,
    ]);
});

Route::get('/resume', function(){
    return Inertia::render('Resume', [
        'year' => date('Y'),
    ]);
})->name('resume');


Route::get('/projects', function(){
    return Inertia::render('Projects');
})->name('projects');

Route::get('/deepdives', function(){
    return Inertia::render('Deepdives');
})->name('deepdives');

Route::get('/chess', [ChessController::class, 'index'])->name('chess');

Route::get('/schaakles/{filename}', function($filename){
    return Inertia::render('Schaakles', [
        'filename' => $filename,
    ]);
})->name('schaakles');



Route::get('/teams/{path1}/{path2?}', [SwissMasterController::class, 'index'])->where(['path1' => '[a-zA-Z0-9]+', 'path2' => '[a-zA-Z0-9]+']);
Route::get('/teams/{path1}', [SwissMasterController::class, 'index'])->where(['path1' => '[a-zA-Z0-9]+']);

Route::get('/rad', function() {
    return Redirect::to('https://wheelofnames.com/nl/gdp-5hp');
});

