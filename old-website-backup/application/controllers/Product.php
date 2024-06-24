<?php
defined ('BASEPATH') OR exit ('No direct script access allowed');

class Product extends CI_Controller{

    public function document_management_system()
    {
        $this->load->view('frontent/product/document_management_system');
    }

    public function hotel_management_system()
    {
        $this->load->view('frontent/product/hotel_management_system');
    }

    public function school_management_system()
    {
        $this->load->view('frontent/product/school_management_system');
    }
}