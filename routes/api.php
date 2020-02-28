<?php

use Illuminate\Http\Request;
use App\Models\Card;
use App\Http\Resources\Card as CardResource;

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

Route::get('/cards', function () {
    return CardResource::collection(Card::paginate(10));
})->middleware("cors");

Route::put('/card/{id}/active', function ($id) {
    $card = new CardResource(Card::findOrFail((int)$id));
    $card->status = 'active';
    $card->save();
    return $card;
})->middleware("cors");

Route::put('/card/{id}/deactive', function ($id) {
    $card = new CardResource(Card::findOrFail((int)$id));
    $card->status = 'deactive';
    $card->save();
    return $card;
})->middleware("cors");

Route::put('/card/{id}/hire', function ($id) {
    $card = new CardResource(Card::findOrFail((int)$id));
    $card->status = 'hire';
    $card->save();
    return $card;
})->middleware("cors");

/* Route::get('/info', function () {
    return phpinfo();
}); */
