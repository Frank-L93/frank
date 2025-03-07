<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Http\Controllers\ChessController;

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

Route::get('/pk', function(){
    return Inertia::render('PK');
})->name('PK');

Route::get('/rad', function() {
    return Redirect::to('https://wheelofnames.com/nl/gdp-5hp');
});

