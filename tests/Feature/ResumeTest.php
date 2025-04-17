<?php


it('can render the resume page', function () {
    $response = $this->get('/resume');

    $response->assertStatus(200);
});

it('can render the projects page', function () {
    $response = $this->get('/projects');

    $response->assertStatus(200);
});
