<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ShrineController extends Controller
{
    public function index(Request $request)
    {
        $google_api_key = config('app.google_api_key');
        $lat = $request->input('lat');
        $lng = $request->input('lng');
        $language = $request->input('language');

        $response = Http::get('https://maps.googleapis.com/maps/api/place/textsearch/json', [
            'key' => $google_api_key,
            'query' => '神社', // 検索クエリ
            'location' => $lat.','.$lng, // Specify the latitude and longitude
            'radius' => 5000, // Optional: Set the search radius in meters
            'language' => $language,
        ]);

        return $response->json();
    }
}
