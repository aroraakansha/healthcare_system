import React from "react";
import blood from "./images/image2.png";
import bed from "./images/bed.png";
import ambulance from "./images/ambulance2.png";
import labs from "./images/labs.png";
import insurance from "./images/insurance.png";
import opd from"./images/Opd.png";
function GetStarted()
{
    return (
      <div className="my-5">
      <h1 className="text-center ">Our Services</h1><br></br><br></br>
      <div className="Container-fluid md-5">
      <div className="row " >
      <div className="col-10-mx-auto">
      <div className="row gy-5">
      <div className="col-md-4 col-10 mx-auto "><div class="card" >
      <img src={bed} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center">Bed Booking Services</h5>
        <p class="card-text">Here you can easily find the available beds in any hospitals </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div></div>
    <div className="col-md-4 col-10 mx-auto"><div class="card" >
    <img src={blood} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-center">Blood Donation Services</h5>
      <p class="card-text">You can easily donate and find the blood doner for patients</p>
      <a href="./BloodDonation" class="btn btn-primary">Go somewhere</a>
    </div>
  </div></div>
  <div className="col-md-4 col-10 mx-auto"><div class="card" >
  <img src={ambulance} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Ambulance Booking Services</h5>
    <p class="card-text">Quick ambulance booking for patient services is available for 24X7 </p>
    <a href="#" class="btn btn-primary">Click Here</a>
  </div>
</div></div>
<div className="col-md-4 col-10 mx-auto"><div class="card" >
<img src={insurance} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title text-center">Insurance Services</h5>
  <p class="card-text">Quick insurance details </p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div></div>
<div className="col-md-4 col-10 mx-auto"><div class="card" >
<img src={opd} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title text-center">OPD Services</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div></div>
<div className="col-md-4 col-10 mx-auto"><div class="card" >
<img src={labs} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title text-center">Labs</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div></div>
      </div>
      </div>
      </div>
      </div>
      </div>  
    )
}
export default GetStarted;