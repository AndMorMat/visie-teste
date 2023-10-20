<?php

namespace App\Controller;

use App\Exceptions\ApiException;
use App\Util\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\KernelInterface;

class ExceptionListenerController extends AbstractController
{ 
  private $env;

  public function __construct(KernelInterface $kernel, Response $response) {
        $this->response = new Response();
        $this->env = $kernel->getEnvironment(); 
  }

  /**
   * onKernelException
   * Método chamado quando uma \Exception é lançada no ciclo de excução da aplicação
  **/
  public function onKernelException($event) {
    $exception = $event->getThrowable();

    if($this->env == 'dev'){
      $this->response
        ->setSuccess('NAO')
        ->setMessage(
          sprintf(
            '%s:%s:%s', 
            $exception->getMessage(), 
            $exception->getFile(), 
            $exception->getLine()
          )
        );
    } else{
      if($exception instanceof ApiException) {
        $this->response
          ->setSuccess('NAO')
          ->setMessage($exception->getMessage());
      }else{
        $this->response
          ->setSuccess('NAO')
          ->setMessage('Ops, um erro ocorreu, por favor, tente mais tarde!');
      }
    }

    return $event->setResponse($this->json($this->response));
  }
}
