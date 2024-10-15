<?php

namespace App\EventSubscriber;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Http\Event\LoginSuccessEvent;

class LoginSubscriber implements EventSubscriberInterface
{
    private $security;
    private $em;

    public function __construct(Security $security, EntityManagerInterface $em)
    {
        $this->security = $security;
        $this->em = $em;
    }

    /**
     * On login event, we update the last login date
     * @return void
     */
    public function onLogin(): void
    {
        $user = $this->security->getUser();
        $user->setLastLoginAt(new \DateTime());
        $this->em->flush();

    }

    /**
     * Here we define the event we want to listen to
     * @return string[]
     */
    public static function getSubscribedEvents(): array
    {
        return [
            LoginSuccessEvent::class => 'onLogin',
        ];
    }
}
