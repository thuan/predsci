<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class DatabaseController extends CI_Controller {

	public function index()
	{
		$this->load->library('Mongo_db', $config);
		$this->$config->insert('dbpredsci', array('England','Scotland'));
	}

}

/* End of file databaseController.php */
/* Location: ./application/controllers/databaseController.php */