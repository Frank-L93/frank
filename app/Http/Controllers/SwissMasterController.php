<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SwissMasterController
{
    public function index(Request $request)
    {
        // Extract the path segments from the URL
        $pathSegments = $request->segments();

        // Check if there are enough segments to form a valid path
        if (count($pathSegments) < 2) {
            return response()->json(['error' => 'Invalid path'], 400);
        }

        // Construct the base directory
        $baseDirectory = '/';

        // Build the subpath from the URL segments
        $subPath = implode('/', array_slice($pathSegments, 1));

        // Construct the full directory path
        $directoryPath = $baseDirectory . $subPath . "/";

        // Check if the directory exists
        if (!Storage::disk('teams')->exists($directoryPath)) {

            return response()->json(['error' => 'Directory not found'], 404);
        }

        // Find the data.json file in the directory
        $files = Storage::disk('teams')->files($directoryPath);

        $dataFile = null;
        foreach ($files as $file) {

            if (basename($file) === "data.json") {
                $dataFile = $file;

                break;
            }

        }

        // Check if data.json was found
        if ($dataFile === null) {
            return response()->json(['error' => 'data.json not found'], 404);
        }

        // Get the content of the data.json file
        $jsonData = Storage::disk('teams')->get($dataFile);

        // Decode the JSON data
        $data = json_decode($jsonData, true);

        // Check if the JSON data is valid
        if (json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Invalid JSON data'], 500);
        }

        return Inertia::render('Ranking', [
            'data' => $data,
        ]);
    }

    public function individual(Request $request)
    {
        // Extract the path segments from the URL
        $pathSegments = $request->segments();

        // Check if there are enough segments to form a valid path
        if (count($pathSegments) < 2) {
            return response()->json(['error' => 'Invalid path'], 400);
        }

        // Construct the base directory
        $baseDirectory = '/';

        // Build the subpath from the URL segments
        $subPath = implode('/', array_slice($pathSegments, 1));

        // Construct the full directory path
        $directoryPath = $baseDirectory . $subPath . "/";

        // Check if the directory exists
        if (!Storage::disk('teams')->exists($directoryPath)) {

            return response()->json(['error' => 'Directory not found'], 404);
        }

        // Find the data.json file in the directory
        $files = Storage::disk('teams')->files($directoryPath);

        $dataFile = null;
        foreach ($files as $file) {

            if (basename($file) === "data.json") {
                $dataFile = $file;

                break;
            }

        }

        // Check if data.json was found
        if ($dataFile === null) {
            return response()->json(['error' => 'data.json not found'], 404);
        }

        // Get the content of the data.json file
        $jsonData = Storage::disk('teams')->get($dataFile);

        // Decode the JSON data
        $data = json_decode($jsonData, true);

        // Check if the JSON data is valid
        if (json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Invalid JSON data'], 500);
        }

        return Inertia::render('Ranking', [
            'data' => $data,
        ]);
    }
        public function teamsIndex(){
            return Inertia::render('SwissMasterTeamsIndex');
        }

        public function individualIndex(){
            return Inertia::render('SwissMasterIndividualIndex');
        }
}
