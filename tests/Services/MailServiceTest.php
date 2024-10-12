<?php

namespace App\Tests\Services;

use App\Services\MailService;
use Mailjet\Client;
use Mailjet\Resources;
use PHPUnit\Framework\TestCase;
use Twig\Environment;

class MailServiceTest extends TestCase
{
    public function testSend()
    {
        // Mock Twig Environment
        $twig = $this->createMock(Environment::class);
        $twig->method('render')
            ->willReturn('<p>Dear Rudy Saksik,</p><p>Your account has been successfully created.</p>');

        // Mock Mailjet Client
        $mailjetClient = $this->createMock(Client::class);
        $mailjetClient->expects($this->once())
            ->method('post')
            ->with(
                $this->equalTo(Resources::$Email),
                $this->callback(function ($params) {
                    // Validate that 'content' is passed correctly
                    return isset($params['body']['Messages'][0]['Variables']['content']) &&
                        strpos($params['body']['Messages'][0]['Variables']['content'], 'Dear Rudy Saksik') !== false;
                })
            );

        // Instantiate the MailService with mocks
        $mailService = new MailService($twig, $mailjetClient);

        // Call the send method
        $mailService->send(
            'rudy.saksik@gmail.com',
            'Rudy Saksik',
            'Account Created',
            'mail/welcome.html.twig',
            ['firstname' => 'Rudy', 'lastname' => 'Saksik']
        );
    }
}
