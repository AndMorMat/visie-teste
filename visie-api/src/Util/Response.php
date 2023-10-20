<?php

namespace App\Util;

/** 
 * @author Andre Matos <andre_matos13@hotmail.com>
 **/
class Response {
	
	/**
	 * @var bool
	**/
	private $success;

	/**
	 * @var string
	**/
	private $message;

	/**
	 * @var array
	**/
	private $content = [];

	/**
     * @return mixed
     */
    public function getSuccess()
    {
        return $this->success;
    }

    /**
     * @param mixed $success
     *
     * @return self
     */
    public function setSuccess($success)
    {
        $this->success = $success;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getMessage()
    {
        return $this->message;
    }

    /**
     * @param mixed $message
     *
     * @return self
     */
    public function setMessage($message)
    {
        $this->message = $message;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param mixed $content
     *
     * @return self
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    
}	