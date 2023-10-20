<?php 
namespace App\Repository;

use App\Entity\People;
use Doctrine\ORM\EntityManagerInterface;

/**	
 * @author Andre Matos <andre_matos13@hotmail.com>
 */
class PeopleRepository {

	public function __construct(EntityManagerInterface $entityManager) {
		$this->manager = $entityManager;
	}

	public function getManager() {
		return $this->manager;
	}

	public function getRepository() {
		return $this->manager->getRepository(People::class);
	}

	/**
	 * @param People $people
	 * @return People
	 */
	public function save(People $people): People {
		$this->manager->persist($people);
		$this->manager->flush();
		return $people;
	}

	/**	
	 * @return void
	 */
	public function update(): void {
		$this->manager->flush();
	}

	/**
	 * @param People $people
	 * @return void
	 */
	public function remove(People $people): void {
		$this->manager->remove($people);
		$this->manager->flush();
	}
	
}