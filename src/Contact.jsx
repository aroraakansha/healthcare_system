import react from "react";
import web from "../src/images/login.png";
import photo from "../src/images/contact.png";
function ContactUs()
{

    return (
        <>
        <div className="row">
        <div class="col-md-3">
           
          
            <img src={photo} class="img-fluid" alt="Responsive image"/>
          </div>
        <section class="vh-100 col" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-9">

        <h1 class=" mb-4 text-center">Contact Us</h1>

        <div class="card border" >
          <div class="card-body">

            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Full name</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="text" class="form-control form-control-lg" />

              </div>
            </div>

            <hr class="mx-n3"/>
            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Phone No</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="number" class="form-control form-control-lg"placeholder="@12345" />

              </div>
            </div>

            <hr class="mx-n3"/>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Email address</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="email" class="form-control form-control-lg" placeholder="example@example.com" />

              </div>
            </div>

            <hr class="mx-n3"/>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Full name</h6>

              </div>
              <div class="col-md-9 pe-5">

                <textarea class="form-control" rows="3" placeholder="Message sent to the employer"></textarea>

              </div>
            </div>

            <hr class="mx-n3"/>          

            <hr class="mx-n3"/>

            <div class="px-5 py-4">
              <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
        </div>
        </>
    )
}
export default ContactUs