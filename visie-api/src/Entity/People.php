<?php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @author Andre Matos <andre_matos13@hotmail.com>
 *
 * @ORM\Table(name="pessoas")
 * @ORM\Entity
 */
class People
{
    /**
     * @var int
     *
     * @ORM\Column(name="id_pessoa", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     * @Assert\NotBlank(message="peopleId is required to edid", groups={"edit", "delete"})
     */
    private $peopleId;

    /**
     * @var string
     *
     * @ORM\Column(name="nome", type="string", length=100, nullable=false)
     * @Assert\NotBlank
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="rg", type="string", length=100, nullable=false)
     * @Assert\NotBlank
     */
    private $rg;

    /**
     * @var string
     *
     * @ORM\Column(name="cpf", type="string", length=100, nullable=false)
     * @Assert\NotBlank
     */
    private $cpf;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="data_nascimento", type="date", nullable=false)
     */
    private $birthDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="data_admissao", type="date", nullable=false)
     * @Assert\NotBlank
     */
    private $admissionDate;

    /**
     * @var string
     *
     * @ORM\Column(name="funcao", type="string", length=100, nullable=false)
     */
    private $role;

    public function __construct($peopleParams = null) {
        $this->peopleId = $peopleParams->peopleId ?? '';
        $this->name = $peopleParams->name ?? '';
        $this->rg = $peopleParams->rg ?? '';
        $this->cpf = $peopleParams->cpf ?? '';
        $this->birthDate = new \DateTime($this->dateFormat($peopleParams->birthDate ?? ''));
        $this->admissionDate = new \DateTime($this->dateFormat($peopleParams->admissionDate ?? ''));
        $this->role = $peopleParams->role ?? '';
    }

    private function dateFormat($date) {
        return date('Y-m-d H:i:s', strtotime(preg_replace('/\//','-', $date)));
    }

    /**
     * @return string
     */
    public function getPeopleId(): int {
        return $this->peopleId;
    }

    /** 
     * @param int
     * @return self
     */
    public function setPeopleId(int $peopleId) {
        $this->peopleId = $peopleId;
        return $this;
    }

    /**
     * @return string
     */
    public function getName(): string {
        return $this->name;
    }

    /** 
     * @param string
     * @return self
     */
    public function setName(string $name) {
        $this->name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getRg(): string {
        return $this->rg;
    }

    /** 
     * @param string
     * @return self
     */
    public function setRg(string $rg) {
        $this->rg = $rg;
        return $this;
    }

    /**
     * @return string
     */
    public function getCpf(): string {
        return $this->cpf;
    }

    /** 
     * @param string
     * @return self
     */
    public function setCpf(string $cpf) {
        $this->cpf = $cpf;
        return $this;
    }

    /**
     * @return DateTime
     */
    public function getBirthDate(): \DateTime {
        return $this->birthDate;
    }

    /** 
     * @param DateTime
     * @return self
     */
    public function setBirthDate(\DateTime $birthDate) {
        $this->birthDate = $birthDate;
        return $this;
    }

    /**
     * @return DateTime
     */
    public function getAdmissionDate(): \DateTime {
        return $this->admissionDate;
    }

    /** 
     * @param DateTime
     * @return self
     */
    public function setAdmissionDate(\DateTime $admissionDate) {
        $this->admissionDate = $admissionDate;
        return $this;
    }

    /**
     * @return string
     */
    public function getRole(): string {
        return $this->role;
    }

    /** 
     * @param string
     * @return self
     */
    public function setRole(string $role) {
        $this->role = $role;
        return $this;
    }


    
}
