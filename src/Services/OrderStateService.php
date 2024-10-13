<?php

namespace App\Services;

class OrderStateService
{
    public const STATES = [
        3 => [
            'label' => 'Processing',
            'email_subject' => 'Order in process',
            'email_template' => 'mail/state/order_state_3.html.twig',
        ],
        4 => [
            'label' => 'Shipped',
            'email_subject' => 'Order being delivered',
            'email_template' => 'mail/state/order_state_4.html.twig',
        ],
        5 => [
            'label' => 'Delivered',
            'email_subject' => 'Order delivered',
            'email_template' => 'mail/state/order_state_5.html.twig',
        ],
        6 => [
            'label' => 'Cancelled',
            'email_subject' => 'Order canceled',
            'email_template' => 'mail/order_state_6.html.twig',
        ],
    ];
}
