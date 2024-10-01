<?php

namespace App\Tests\webTestCase;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class RegisterUserTest extends WebTestCase
{
    public function testSomething(): void
    {
        $client = static::createClient();
        $client->request('GET', '/register');

        // Random email to avoid duplicate email error
        $randomEmail = 'albert' . rand(1, 1000) . '@exemple.fr';

        $client->submitForm('Register', [
            'register_user[email]' => $randomEmail,
            'register_user[plainPassword][first]' => 'password',
            'register_user[plainPassword][second]' => 'password',
            'register_user[firstname]' => 'Albert',
            'register_user[lastname]' => 'Dupont'
        ]);

        // Check if the user is redirected to the home page
        $this->assertResponseRedirects('/');
        $client->followRedirect();

        // Check the flash message if success
        $this->assertSelectorExists('.alert.alert-success:contains("Your account has been created successfully!")');
    }
}
