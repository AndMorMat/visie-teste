<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Services\PeopleService;
use App\Entity\People;

/**
 * @Route("/people")
 */
class PeopleController extends DefaultController {

	/**
     * @Route("/list", name="list", methods={"GET"})
     */
    public function index(Request $request, PeopleService $peopleService): Response
    {
        $people = $peopleService->getAll();
        return $this->send($people);
    }

    /**
     * @Route("/add", name="add", methods={"POST"})
     */
    public function add(Request $request, PeopleService $peopleService, ValidatorInterface $validator): Response
    {
        $people = new People(json_decode($request->getContent()));
        $violations = $validator->validate($people);

        if(count($violations)) {
            throw new \Exception($violations);
        }
            	
    	$entity = $peopleService->add($people);

        return $this->send($entity, $this->operationMessage);
    }

    /**
     * @Route("/edit", name="edit", methods={"PUT"})
     */
    public function edit(Request $request, PeopleService $peopleService, ValidatorInterface $validator): Response
    {
        $people = new People(json_decode($request->getContent()));
        $violations = $validator->validate($people, null, ['edit']);

        if(count($violations)) {
            throw new \Exception($violations);
        }
            	
    	$entity = $peopleService->update($people);

        return $this->send($entity, $this->operationMessage);
    }

    /**
     * @Route("/delete/{peopleId}", name="delete", methods={"DELETE"})
     */
    public function delete(Request $request, PeopleService $peopleService, ValidatorInterface $validator, $peopleId): Response
    {
        $people = (new People())->setPeopleId($peopleId);
        $violations = $validator->validate($people, null, ['delete']);

        if(count($violations)) {
            throw new \Exception($violations);
        }
            	
    	$peopleService->delete($people);

        return $this->send(null, $this->operationMessage);
    }

}