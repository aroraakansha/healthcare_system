import react from "react";
import photo from "../src/images/login.png";
import { NavLink } from "react-router-dom";
function HospitalLogin()
{
    return (
      <div >
        <div className="container-sm">
        <section className="mx-5 my-5"><section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
      
              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" ></i>
                <span className="h1 fw-bold mb-0">HealthcareHub</span>
              </div>
      
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
      
                <form >

                  <h3 className="fw-normal mb-3 pb-3" >Log in</h3>
      
                  <div className="form-outline mb-4">
                    <input type="String" id="form2Example18" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example18">LoginId</label>
                  </div>
      
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example28" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example28">Password</label>
                  </div>
      
                  <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
                  </div>
      
                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <a href="./HosRegister" className="link-info">Register here</a></p>
      
                </form>
      
              </div>
      
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={photo}
                alt="Login image" className="w-100 vh-100" />
            </div>
          </div>
        </div>
      </section></section>
        </div>
        </div>
    )
}
export default HospitalLogin;
