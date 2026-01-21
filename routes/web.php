<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Http\Controllers\ChessController;



Route::livewire('/', 'pages::home')->name('home');
Route::livewire('/projects', 'pages::projects')->name('projects');
Route::livewire('/deepdives', 'pages::deepdives')->name('deepdives');
Route::livewire('/resume', 'pages::resume')->name('resume');
Route::livewire('/chess', 'pages::chess')->name('chess');
Route::livewire('/teams/{path1}/{path2?}', 'pages::ranking')->where(['path1' => '[a-zA-Z0-9]+', 'path2' => '[a-zA-Z0-9]+']);
Route::livewire('/teams/{path1}', 'pages::ranking')->where(['path1' => '[a-zA-Z0-9]+']);

Route::get('/harry-potter', function(){
    return view('harry-potter');
});


Route::get('/rad', function() {
    return Redirect::to('https://wheelofnames.com/nl/gdp-5hp');
});

