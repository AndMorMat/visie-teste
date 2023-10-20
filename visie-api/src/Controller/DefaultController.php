<?php 

namespace App\Controller;

use App\Util\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @author Andre Matos <andre_matos13@hotmail.com>
 */
class DefaultController extends AbstractController {

	protected $response;

	/**
	 * @var string
	 */
	protected $searchMessage = 'Consulta efetuada com sucesso!';

	/**
	 * @var string
	 */
	protected $operationMessage = 'Operação realizada com sucesso!';

	public function __construct(Response $response, SerializerInterface $serializer) {

		$this->serializer = $serializer;
		$this->response = $response;
	}

	public function send($content = [], $message = null, $success = 'SIM') { 

        $this->response
        	->setContent(json_decode($this->serializer->serialize($content, 'json')))
					->setSuccess($success)
					->setMessage($message ?? $this->searchMessage)
        ;

        return $this->json($this->response);
	}

}