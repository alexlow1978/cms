<?php

namespace Fusion\Tests\Feature\Users;

use Fusion\Tests\TestCase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoleTest extends TestCase
{
	use RefreshDatabase;

	public function setUp(): void
	{
		parent::setUp();

		$this->handleValidationExceptions();
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group role
	 */
	public function a_user_with_permissions_can_create_a_role()
	{
		$role = factory(Role::class)->make()->toArray();

		$this
			->be($this->admin, 'api')
			->json('POST', '/api/roles', $role)
			->assertStatus(201);

		$this->assertDatabaseHas('roles', $role);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group role
	 */
	public function roles_can_be_assigned_zero_to_many_permissions()
	{
		$role = factory(Role::class)->create();
		$permissions = factory(Permission::class, 3)->create();

		// update ----
		$attributes = [
			'label'        => $role->label,
			'description' => 'New Description',
		];

		$this
			->be($this->admin, 'api')
			->json('PATCH', '/api/roles/' . $role->id,
				$attributes + ['permissions' => $permissions->pluck('name')])
			->assertStatus(200);

		$this->assertDatabaseHas('roles', $attributes);

		$permissions->each(function($permission) use ($role) {
			$this->assertDatabaseHas('role_has_permissions', [
				'role_id'       => $role->id,
				'permission_id' => $permission->id,
			]);
		});
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group role
	 */
	public function a_guest_cannot_not_create_a_role()
	{
		$this->expectException(AuthenticationException::class);

		$this->json('POST', '/api/roles', []);
	}

	/**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function a_user_without_permissions_cannot_create_new_roles()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/roles', []);
    }

	/**
	 * @test
	 * @group fusioncms
	 * @group feature
	 * @group role
	 */
	public function a_user_cannot_create_a_role_without_required_fields()
	{
		$this
			->be($this->admin, 'api')
			->json('POST', '/api/roles', [])
			->assertStatus(422)
			->assertJsonValidationErrors(['label']);
	}
}