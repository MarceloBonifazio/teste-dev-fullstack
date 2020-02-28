<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Card extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    
    public function toArray($request)
    {
        return [
            'about' => $this->about,
            'amount' => $this->amount,
            'color' => $this->color,
            'icon' => $this->icon,
            'id' => $this->id,
            'status' => $this->status,
            'title' => $this->title,
            'type' => $this->type,
        ];
    }
}
