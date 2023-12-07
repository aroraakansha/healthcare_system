import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navigate = useNavigate();

  const [fname,setFName]=useState('');
  const [lname,setLName]=useState('');
  const [phone,setphone]=useState('');
  const [email,setemail]=useState('');
  const [pass,setpass]=useState('');
  const [cPass,setcPass]=useState('');
  
     const handleRegistrationSubmit = async () => {
      const resp = await axios.post("http://localhost:3001/adduser", {firstname:fname,lastname:lname,phonenumber:phone,email:email,password:pass,confirmpassword:cPass})
      console.log(resp);
      toast.success(resp.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          navigate("/Home");
        },  6000)
    }
    
           
  return (
    <>
      <section>
        <section className="h-100 bg-dark ">
          <form >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card card-registration my-4">
                    <div className="row g-0">
                      <div className="col-xl-6 d-none d-xl-block">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                          alt="Sample photo"
                          className="img-fluid"
                          id="dca"
                        />
                      </div>

                      <div className="col-xl-6" method="Post">
                        <div className="card-body p-md-5 text-black">
                          <h3 className="mb-5 text-uppercase">Registration</h3>

                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="firstname"
                                  className="form-control form-control-lg"
                                  autoComplete="off"

                                  value={fname}
                                  onChange={(e) => setFName(e.target.value)}
                                  required
                                />
                                <label className="form-label">First name</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  name="lastname"
                                  id="form3Example1n"
                                  class="form-control form-control-lg"
                                  value={lname}
                                  onChange={(e) => setLName(e.target.value)}
                                  required
                                />
                                <label className="form-label">Last name</label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="number"
                                  name="phonenumber"
                                  id="form3Example1m1"
                                  className="form-control form-control-lg"
                                  value={phone}
                                  onChange={(e) => setphone(e.target.value)}
                                  required
                                />
                                <label className="form-label">Phone No</label>
                              </div>
                            </div>
                          </div>
                          <div class="form-outline mb-4">
                            <input
                              type="email"
                              name="ema"
                              id="form3Example8"
                              className="form-control form-control-lg"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                              required
                            />
                            <label className="form-label">Email id</label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              name="password"
                              className="form-control form-control-lg"
                              autoComplete="off"
                              value={pass}
                              onChange={(e) => setpass(e.target.value)}
                              required
                            />
                            <label className="form-label">Password</label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              name="confirmpassword"
                              className="form-control form-control-lg"
                              value={cPass}
                              onChange={(e) => setcPass(e.target.value)}
                              required
                            />
                            <label
                              className="form-label"
                              name="ConfirmPassword"
                            >
                              Confirm Password
                            </label>
                          </div>

                          <div className="d-flex justify-content-end pt-3">
                            <button
                              type="button"
                              className="btn btn-warning btn-lg ms-2"
                              value="Submit"
                              onClick={() => handleRegistrationSubmit()}
                              
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default Register;
