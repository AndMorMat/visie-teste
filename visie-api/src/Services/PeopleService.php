<?php  

namespace App\Services;

use App\Entity\NotificationToken;
use App\Repository\PeopleRepository;
use App\Exceptions\ApiException;
use App\Entity\People;

/**
 * @author Andre Matos <andre_matos13@hotmail.com>
**/
class PeopleService {

	public function __construct(PeopleRepository $peopleRepository) {
		$this->peopleRepository = $peopleRepository;
	}

	/**
	 * @param People $people
	 * @return People
	 */
	public function add(People $people): People {
		return $this->peopleRepository->save($people);
	}

	/**
	 * @param People $people
	 * @return People
	 */
	public function update(People $people): People {
		
		$entity = $this->peopleRepository->getRepository()->findOneBy(['peopleId' => $people->getPeopleId()]);

		if(!$entity) {
			throw new ApiException("Pessoa não encontrada");
		}

		$entity->setName($people->getName())
					->setRg($people->getRg())
					->setCpf($people->getCpf())
					->setBirthDate($people->getBirthDate())
					->setAdmissionDate($people->getAdmissionDate())
					->setRole($people->getRole())
				;

		$this->peopleRepository->update($entity);
		return $entity;
	}

	/**
	 * @param People $people
	 * @return void
	 */
	public function delete(People $people): void {
		$entity = $this->peopleRepository->getRepository()->findOneBy(['peopleId' => $people->getPeopleId()]);

		if(!$entity) {
			throw new ApiException("Pessoa não encontrada");
		}

		$this->peopleRepository->remove($entity);
	}

	public function getAll() {
		return $this->peopleRepository->getRepository()->findBy([], ['peopleId' => 'DESC']);
	}
}