<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Inertia\Inertia;

class ChessController
{
    use AuthorizesRequests, ValidatesRequests;
    public const SEPARATOR = PHP_EOL;
    public static function index()
    {

        return Inertia::render('Chess',
        [
            'online' => json_decode(ChessController::GetOnlineStatus())[0],
            'pgn' => ChessController::GetLastGameLiChess(),
            'knsb' => ChessController::GetKNSBRating(),
            'stats' => Inertia::defer(fn() => json_decode(ChessController::GetLiChessStats())),
        ]);
    }

    public static function GetOnlineStatus(){
        $api = curl_init();
        curl_setopt($api, CURLOPT_URL, "https://lichess.org/api/users/status?ids=Helikopter");
        curl_setopt($api, CURLOPT_HTTPHEADER, array("Content-Type: application/json", "Authorization: Bearer bzpT6caKxQlDhbYu"));
        curl_setopt($api, CURLOPT_RETURNTRANSFER, TRUE);
        $data = curl_exec($api);
        curl_close($api);
        return $data;
    }
    public static function GetLiChessStats()
    {

        $api = curl_init();
        curl_setopt($api, CURLOPT_URL, "https://lichess.org/api/account");
        curl_setopt($api, CURLOPT_HTTPHEADER, array("Content-Type: application/json", "Authorization: Bearer bzpT6caKxQlDhbYu"));
        curl_setopt($api, CURLOPT_RETURNTRANSFER, TRUE);
        $data = curl_exec($api);
        curl_close($api);
        return $data;
    }

    public static function GetLastGameLiChess()
    {

        $api = curl_init();
        curl_setopt($api, CURLOPT_URL, "https://lichess.org/api/games/user/Helikopter?max=1&ongoing=true&pgnInJson=true&clocks=false");

        curl_setopt($api, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
        curl_setopt($api, CURLOPT_RETURNTRANSFER, TRUE);
        $data = curl_exec($api);

        curl_close($api);
        $array = $data;

        return $array;
    }

    public static function GetKNSBRating()
    {
        $api = curl_init();
        curl_setopt($api, CURLOPT_URL, "https://ratingviewer.nl/metrics/forRelatienr/8090687.json");
        curl_setopt($api, CURLOPT_HTTPHEADER, array("Content-Type: application/json"));
        curl_setopt($api, CURLOPT_RETURNTRANSFER, TRUE);
        $data = curl_exec($api);
        $lists = json_decode($data);
        usort($lists, function($a, $b) {
            return $b->list_id <=> $a->list_id;
        });

        $max_list_id = $lists[0]->list_id;
        $filtered_lists = array_filter($lists, function($item) use ($max_list_id) {
            return $item->list_id >= ($max_list_id - 2);
        });

         // Add qualifiers
         $qualifiers = ['Blitz', 'Rapid', 'Klassiek'];
         $filtered_lists = array_values($filtered_lists); // Reindex array

         if (count($filtered_lists) == 2) {
             if ($filtered_lists[0]->list_id - $filtered_lists[1]->list_id > 1) {
                 // If there is a gap, assign 'classic' to the second item
                 $filtered_lists[0]->qualifier = 'Blitz';
                 $filtered_lists[1]->qualifier = 'Klassiek';
             } else {
                 // No gap, assign 'blitz' and 'rapid'
                 $filtered_lists[0]->qualifier = 'Blitz';
                 $filtered_lists[1]->qualifier = 'Rapid';
             }
         } else {
             foreach ($filtered_lists as $index => $item) {
                 if (isset($qualifiers[$index])) {
                     $item->qualifier = $qualifiers[$index];
                 }
             }
         }
        curl_close($api);
        return $filtered_lists;
    }

  /* We can not get the FIDE rating because of the CORS policy
    public static function GetFIDERating()
    {
        $post = [
            'event' => 1032720,
            'period' => 1,
        ];
        $api = curl_init("https://ratings.fide.com/a_chart_data.phtml");
        curl_setopt($api ,CURLOPT_HTTPHEADER,array('X-Requested-With: XMLHttpRequest', 'Host: ratings.fide.com', 'Origin: https://ratings.fide.com'));
        curl_setopt($api, CURLOPT_POST, true);
        curl_setopt($api, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($api, CURLOPT_POSTFIELDS, $post);

        $data = curl_exec($api);

        return $data;
    }
    */
   /*  Not used
    public static function moreData(String $perf)
    {
        $api = curl_init();
        curl_setopt($api, CURLOPT_URL, "https://lichess.org/api/user/helikopter/perf/".$perf);
        curl_setopt($api, CURLOPT_HTTPHEADER, array("Content-Type: application/json", "Authorization: Bearer bzpT6caKxQlDhbYu"));
        curl_setopt($api, CURLOPT_RETURNTRANSFER, TRUE);
        $data = curl_exec($api);
        curl_close($api);

        $real_data = json_decode($data);
        return response()->json($real_data);

    } */

    public static function Galery()
    {
        if(isset($_GET['galerij'])){
            $files = 'uploads/2025/galerij/'.$_GET['galerij'];
            $scanned_directory = array_diff(scandir($files), array('..', '.'));
            return $scanned_directory;
        }
        else{
            return "Geen galerij";
        }

    }
}
