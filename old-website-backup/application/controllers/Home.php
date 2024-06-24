<?php
defined ('BASEPATH') OR exit ('No direct script access allowed');

class Home extends CI_Controller{

    public function index()
    {
        $this->load->view('frontent/index');
    }

    public function about()
    {
        $this->load->view('frontent/home/about');
    }

    public function portfolio()
    {
        $this->load->view('frontent/home/portfolio');
    }

    public function contact()
    {
        $this->load->view('frontent/home/contact');
    }
    public function services()
    {
        $this->load->view('frontent/home/services');
    }
    public function we_are_hiring()
    {
        $this->load->view('frontent/home/we_are_hiring');
    }
    public function development()
    {
        $this->load->view('frontent/home/development');
    }
    public function web_development()
    {
        $this->load->view('frontent/home/web_development');
    }
    public function seo_marketing()
    {
        $this->load->view('frontent/home/seo_marketing');
    }
    
   
}