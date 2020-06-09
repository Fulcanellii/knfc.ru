<?php

declare(strict_types=1);

namespace DomoffonApp\Controller;

use DomoffonApp\Service\FormDataStorage;
use DomoffonApp\Service\FormValidator;
use DomoffonApp\Service\MailSender;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Container\ContainerInterface;
use Sinergi\BrowserDetector\Browser;
use Sinergi\BrowserDetector\Os;


class PageController 
{
    /** @var ContainerInterface */
    protected $container;

    /** @var \Twig\Environment */
    protected $twig;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->twig = $container->get('twig');
    }

    /**
     * Get home page
     * @return Response
     */
    public function home(Request $request, Response $response)
    {
        //Определяем браузер и ОС пользователя, чтобы вывести предупреждение
        $showBrowserWarning = false;
        $browser = new Browser();
        $os = new Os();
        if($os->getName() === Os::ANDROID) {
            if($browser->getName() != Browser::CHROME) { //Если открываем на андроиде не хром
                $showBrowserWarning = True;
            }
        }

        return $this->render($response, 'main_page.html.twig', [
            'showBrowserWarning' => $showBrowserWarning,
        ]);
    }

    /**
     * Get success page
     * @return Response
     */
    public function success(Request $request, Response $response)
    {  
        
    }

    /**
     * Handles a request from main page form
     */
    public function handler(Request $request, Response $response)
    {
        $formData = new FormDataStorage();

        $formData->fillFromRequest($request);

        $mailSender = new MailSender();
        $mailSender->setConfig($this->container);
        $mailSender->setContent($formData);
        $mailSender->send();
        return $this->render($response, 'success.html.twig'); 
    }

    /**
     * Returns a response with twig template
     * @return Response
     */
    protected function render(Response $response, string $template, array $context = [])
    {
        $body = $response->getBody();
        $body->write($this->twig->render($template, $context));
        return $response->withBody($body);
    }
}
