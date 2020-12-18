<?php

namespace Fusion\Http\Controllers\API\Forms;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ResponseResource;
use Fusion\Models\Form;
use Fusion\Services\Builders;
use Illuminate\Http\Request;

class ResponseController extends Controller
{
    public function index($slug)
    {
        $this->authorize('responses.viewAny');

        $responses = Form::where('slug', $slug)
            ->firstOrFail()
            ->responses()
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return ResponseResource::collection($responses);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Form $slug
     *
     * @return \Illuminate\Http\Response
     */
    public function show($slug, $id)
    {
        $this->authorize('responses.view');

        $form     = Form::where('slug', $slug)->firstOrFail();
        $model    = Builders\Form::resolve($form->handle);
        $response = $model->find($id);

        return new ResponseResource($response);
    }

    public function store(Request $request, $slug)
    {
        $this->authorize('responses.create');

        $form          = Form::where('slug', $slug)->firstOrFail();
        $collection    = Builders\Form::resolve($form->handle);
        $relationships = [];

        $rules = [
            'name'   => 'required',
            'handle' => 'sometimes',
        ];

        if (isset($form->blueprint)) {
            $fields        = $form->blueprint->database();
            $relationships = $form->blueprint->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes            = $request->validate($rules);
        $attributes['form_id'] = $form->id;

        $response = $collection->create($attributes);

        foreach ($relationships as $relationship) {
            $relationship->type()->persistRelationship($response, $relationship);
        }

        return new ResponseResource($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $form
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $slug, $id)
    {
        $this->authorize('responses.update');

        $form          = Form::where('slug', $slug)->firstOrFail();
        $response      = Builders\Form::resolve($form->handle)->find($id);
        $relationships = [];
        $rules         = [
            'name'   => 'required',
            'handle' => 'sometimes',
        ];

        if (isset($form->blueprint)) {
            $fields        = $form->blueprint->database();
            $relationships = $form->blueprint->relationships();

            foreach ($fields as $field) {
                $rules[$field->handle] = 'sometimes';
            }
        }

        $attributes = $request->validate($rules);

        foreach ($attributes as $handle => $value) {
            $response->{$handle} = $value;
        }

        $response->update($attributes);

        foreach ($relationships as $relationship) {
            $relationship->type()->persistRelationship($response, $relationship);
        }

        return new ResponseResource($response);
    }

    public function destroy(Request $request, $slug, $id)
    {
        $this->authorize('responses.delete');

        $form     = Form::where('slug', $slug)->firstOrFail();
        $model    = Builders\Form::resolve($form->handle);
        $response = $model->findOrFail($id);

        $response->delete();
    }
}
