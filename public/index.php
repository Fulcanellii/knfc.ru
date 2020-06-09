<?php
/**
 * 
 * DomoffonApp Form
 * Created by Vasstog
 * https://kwork.ru/user/vasstog
 * 
 */

use DI\Container;
use Slim\Factory\AppFactory;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use DomoffonApp\Controller\PageController;

require __DIR__ . '/../vendor/autoload.php';

$container = new Container();
AppFactory::setContainer($container);
$app = AppFactory::create();
$app->addRoutingMiddleware();

/**
 * Define container
 */
$container->set('twig', function () {
    $loader = new FilesystemLoader(__DIR__ . '/../template/');
    $options = [
        'cache' => false,
    ];
    $twig = new Environment($loader, $options);
    return $twig;
});
$container->set('config', function ( ) {
    return parse_ini_file(__DIR__.'/../config.ini', true);
});


/**
 * Define routes
 */
$app->get('/', PageController::class . ':home');
$app->get('/success', PageController::class . ':success');
$app->post('/handler', PageController::class . ':handler');


/**
 * Add error middlewares
 */

$errorMiddleware = $app->addErrorMiddleware(true, true, true);

/**
 * Run the application
 */
$app->run();

