<!DOCTYPE html>
<html lang="en-US">
 
<?php $this->load->view('layouts/top-header');?>

    <body>
    <?php $this->load->view('layouts/header');?>
 
    
        <div class="inner-pagecont services-cont">
    <div class="innerpage-heading">
        <div class="container">
            <h1> Contact us </h1>
        </div>
    </div>
    

<div class="contactUs">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                                <div class="enquiryHead text-center">
                    <h3>Send your Enquiry</h3>
                    <p><b>We would love to hear from you !</b></p>
                    <p>Give us a call on <b> 0120 4732518 </b> or email us using the form below.</p>
                </div>

                <div class="contactForm">
                    <form id="contact-form" class="form_class" action="http://3iconsulting.in/contact" method="post">
<input type="hidden" name="_csrf-frontend" value="VXdFUkVmbU14RxcEDiRAGCNPfX8nCBcoBhIcCHYnKA8UEy9jEgsieQ==">                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <div class="form-group field-contact-name">

<input type="text" id="contact-name" class="form-control" name="Contact[name]" placeholder="Your Name">

<div class="help-block"></div>
</div>                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <div class="form-group field-contact-email">

<input type="text" id="contact-email" class="form-control" name="Contact[email]" placeholder="Email">

<div class="help-block"></div>
</div>                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <div class="form-group field-contact-mobile">

<input type="text" id="contact-mobile" class="form-control" name="Contact[mobile]" placeholder="Telephone">

<div class="help-block"></div>
</div>                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">

                            <div class="form-group field-contact-subject">

<input type="text" id="contact-subject" class="form-control" name="Contact[subject]" placeholder="Subject">

<div class="help-block"></div>
</div>                            
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <div class="form-group field-contact-message">

<textarea id="contact-message" class="form-control" name="Contact[message]" rows="5" placeholder="Message"></textarea>

<div class="help-block"></div>
</div>                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">

                            <div class="form-group field-contact-verifycode">

<div class="row"><div class="col-lg-3"><img id="contact-verifycode-image" src="site/default/captchacefd.png?v=650bfc423e537" alt=""></div><div class="col-lg-6"><input type="text" id="contact-verifycode" class="form-control" name="Contact[verifyCode]"></div></div>

<div class="help-block"></div>
</div> 
                            <p>please click on image to refresh</p>
                        </div>
                        
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group text-center">
                            <button type="submit" class="btn btn1">Send Message</button>
                        </div></div>
                </div>
                </form>            </div>
        </div>
    </div>
</div>
</div>

<div class="locationInfo">
    <div class="text-center">
        <h3>How to reach us</h3>
        <p><b>Our Address :</b> Unit - 9, H-25, Sector 63, Noida - 201301</p>
    </div>
   <div id="map" style="width:100%;height:500px"></div>

    <!--<div class="locationMap">-->
        Array
(
    [error_message] => You must use an API key to authenticate each request to Google Maps Platform APIs. For additional information, please refer to http://g.co/dev/maps-no-account
    [results] => Array
        (
        )

    [status] => REQUEST_DENIED
)
        
        <!--<iframe src='' width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>-->
    <!--</div>-->
</div>

<script>
function myMap() {
     var latitude = "28.61553770";
      var longitude = "77.3655920";
//      var latlng = new google.maps.LatLng(latitude,longitude);
  var myCenter = new google.maps.LatLng(latitude,longitude);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}
</script>


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1cJc1ZxUaIAVHlqyBk5TSrczglX9sNPs&amp;callback=myMap"></script>
    
    
    
     
</div>  
<?php $this->load->view('layouts/footer');?>
    
</body>

</html>
