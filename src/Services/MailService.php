<?php

namespace App\Services;

use Mailjet\Client;
use Mailjet\Resources;
use Twig\Environment;

class MailService
{
    private $twig;
    private $mailjetClient;

    public function __construct(Environment $twig, Client $mailjetClient = null)
    {
        $this->twig = $twig;
        $this->mailjetClient = $mailjetClient ?: new Client($_ENV['MJ_APIKEY_PUBLIC'], $_ENV['MJ_APIKEY_PRIVATE'], true, ['version' => 'v3.1']);
    }

    public function send($to_email, $to_name, $subject, $template, $vars = [])
    {
        // Rendu du contenu avec Twig
        $content = $this->twig->render($template, $vars);

        $body = [
            'Messages' => [
                [
                    'From' => [
                        'Email' => 'rudy.saksik@gmail.com',
                        'Name' => 'SF7 Ecommerce'
                    ],
                    'To' => [
                        [
                            'Email' => $to_email,
                            'Name' => $to_name
                        ]
                    ],
                    'TemplateID' => 6376504,
                    'TemplateLanguage' => true,
                    'Subject' => $subject,
                    'Variables' => [
                        'content' => $content
                    ]
                ]
            ]
        ];

        $this->mailjetClient->post(Resources::$Email, ['body' => $body]);
    }

}
