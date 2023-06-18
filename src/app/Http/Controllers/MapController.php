<?php

namespace App\Http\Controllers;

class MapController extends Controller
{
    public function index()
    {
        $google_api_key = config('app.google_api_key');
        return view('map.index', compact('google_api_key'));
    }
}
