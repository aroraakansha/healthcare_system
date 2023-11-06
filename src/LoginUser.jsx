import react from "react";
import photo from "../src/images/login.png";
import { NavLink } from "react-router-dom";
function LoginUser()
{
    return (
      <div >
        <div className="container-sm">
        <section className="mx-5 my-5"><section class="vh-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 text-black">
      
              <div class="px-5 ms-xl-4">
                <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" ></i>
                <span class="h1 fw-bold mb-0">HealthcareHub</span>
              </div>
      
              <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
      
                <form >

                  <h3 class="fw-normal mb-3 pb-3" >Log in</h3>
      
                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example18" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example18">Email address</label>
                  </div>
      
                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example28" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example28">Password</label>
                  </div>
      
                  <div class="pt-1 mb-4">
                    <button class="btn btn-info btn-lg btn-block" type="button">Login</button>
                  </div>
      
                  <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <a href="#" class="link-info">Register here</a></p>
      
                </form>
      
              </div>
      
            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
              <img src={photo}
                alt="Login image" class="w-100 vh-100" />
            </div>
          </div>
        </div>
      </section></section>
        </div>
        </div>
    )
}
export default LoginUser;