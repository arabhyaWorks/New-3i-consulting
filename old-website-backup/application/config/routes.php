<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/userguide3/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'home';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;

$route['about-us'] = 'home/about';
$route['contact-us'] = 'home/contact';
$route['portfolio'] = 'home/portfolio';
$route['we-are-hiring'] = 'home/we_are_hiring';
$route['development'] = 'home/development';
$route['services'] = 'home/services';
$route['web-development'] = 'home/web_development';
$route['seo-marketing'] = 'home/seo_marketing';



$route['service/top-sap-support-company'] = 'service/top_sap_support_company';
$route['service/off-shore-support-maintenance-services'] = 'service/off_shore_support_maintenance_services';
$route['service/application-development-and-support'] = 'service/application_development_and_support';
$route['service/sap-business-process-and-consolidation'] = 'service/sap_business_process_and_consolidation';
$route['service/sap-bi-bo-implementation-services'] = 'service/sap_bi_bo_implementation_services';
$route['service/sap-channel-partner'] = 'service/sap_channel_partner';

$route['product/document-management-system'] = 'product/document_management_system';
$route['product/hotel-management-system'] = 'product/hotel_management_system';
$route['product/school-management-system'] = 'product/school_management_system';





