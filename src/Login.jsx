import react from "react";
import web from "../src/images/login.png";
import { NavLink } from "react-router-dom";
function Login()
{
    return (
         
      <>
      
      <section>
      <div class="container">
      <div class="row">
        <div class="col-sm">
          <img src={web} className="image-fluid"></img>
        </div>
       
        <div class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"><h2>User Login<a href="LoginUser"><button className="btn btn-primary " >Click Here</button></a> </h2>
        <div class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"><h2>Hospital Login <a href="/HospitalLogin"><button className="btn btn-primary ">Click Here</button></a></h2>
        
        </div>
        </div>
      </div>
    </div>
    </section>
      </>
    );
}
export default Login
