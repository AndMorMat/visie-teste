<?php 

namespace App\Exceptions;

class ApiException extends \Exception {
	protected $message;

  public function __construct($message) {
    $this->message = $message;
  }
}