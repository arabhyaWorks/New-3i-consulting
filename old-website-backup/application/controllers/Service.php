<?php
defined ('BASEPATH') OR exit ('No direct script access allowed');

class Service extends CI_Controller{

    public function top_sap_support_company()
    {
        $this->load->view('frontent/service/top_sap_support_company');
    }

    public function off_shore_support_maintenance_services()
    {
        $this->load->view('frontent/service/off_shore_support_maintenance_services');
    }

    public function application_development_and_support()
    {
        $this->load->view('frontent/service/application_development_and_support');
    }

    public function sap_business_process_and_consolidation()
    {
        $this->load->view('frontent/service/sap_business_process_and_consolidation');
    }

    public function sap_bi_bo_implementation_services()
    {
        $this->load->view('frontent/service/sap_bi_bo_implementation_services');
    }

    public function sap_channel_partner()
    {
        $this->load->view('frontent/service/sap_channel_partner');
    }

  
}