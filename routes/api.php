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
    return CardResource::collection(Card::paginate(8));
})->middleware("cors");

Route::prefix('card')->group(function () {
    Route::get('{id}', function ($id) {
        return new CardResource(Card::findOrFail((int)$id));
    });

    Route::put('{id}/active', function ($id) {
        $card = Card::findOrFail((int)$id);
        $card->status = 'active';
        $card->save();
        return new CardResource($card);
    });

    Route::put('{id}/deactive', function ($id) {
        $card = Card::findOrFail((int)$id);
        $card->status = 'deactive';
        $card->save();
        return new CardResource($card);
    });
    
    Route::put('{id}/hire', function ($id) {
        $card = Card::findOrFail((int)$id);
        $card->status = 'active';
        $card->save();
        return new CardResource($card);
    });
    
    Route::put('{id}/uncontract', function ($id) {
        $card = Card::findOrFail((int)$id);
        $card->status = 'hire';
        $card->save();
        return new CardResource($card);
    });
});


/* Route::get('/info', function () {
    return phpinfo();
}); */
