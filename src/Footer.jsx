import react from "react";
import { NavLink } from "react-router-dom";

function Footer()
{
    return (
        <>
        <footer class="text-center text-lg-start bg-light text-muted" id="footer">
        
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
           
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            
            <div>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
              </a>
            </div>
           
          </section>
          
          <section class="">
            <div class="container text-center text-md-start mt-5">
          
              <div class="row mt-3">
               
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3" id="cda"></i>HealthcareHub
                  </h6>
                  <p>
                   Healthcarehub is a website which is used in the case of an emergency, booking a bed for patient in the hospitals,etc.
                  </p>
                </div>
              
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                 
                  <h6 class="text-uppercase fw-bold mb-4">
                    Services
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Find a Doctor</a>
                  </p>
                  <p>
                    <a href="/Book" class="text-reset">Ambulance Booking</a>
                  </p>
                  <p>
                    <a href="/BloodDonation" class="text-reset">Blood Donation</a>
                  </p>
                  <p>
                    <a href="/Insurance" class="text-reset">Insurance</a>
                  </p>
                 
                </div>
               
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                 
                  <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="https://medcab.in/?gclid=Cj0KCQjwhfipBhCqARIsAH9msbneD4f50bj_YtgupU-auNc8pVCEYpJCwcskm7zWdcMxzmM9iGyqwpsaAg07EALw_wcB" class="text-reset">Ambulance Rates</a>
                  </p>
                  <p>
                    <a href="/Opd" class="text-reset">OPD</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Bed Booking</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Help</a>
                  </p>
                </div>
              
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                 
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i class="fas fa-home me-3"></i><a href="https://www.akgec.ac.in/" className="text-dark">Ajay Kumar Garg Engineering College</a></p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    healthcareHub123@.com
                  </p>
                  <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                  <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
                
              </div>
            
            </div>
          </section>
          
         
        </footer>
        </>
    );
   
};

export default Footer;