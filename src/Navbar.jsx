 import react from "react";
 function Navbar(){
    return (
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
        <div className="col-10 mx-auto">
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Home">HealthcareHub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">AboutUs</a>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item text-danger" href="#">Emergency</a></li>
            <li><a className="dropdown-item" href="/BloodDonation">Blood Donation</a></li>
            <li><a className="dropdown-item" href="/Insurance">Insurance</a></li>
            <li><a className="dropdown-item" href="/Labs">Labs</a></li>
            <li><a className="dropdown-item" href="/Opd">OPD</a></li>
          
            <li><hr className="dropdown-divider"/></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Hospitals and Departments
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Government Hospital</a></li>
          <li><a className="dropdown-item" href="#">Private Hospital</a></li>
          <li><hr className="dropdown-divider"/></li>          
        </ul>
      </li>
     
           <li className="nav-item">
          <a className="nav-link" href="/Contact">ContactUs</a>
        </li>
        
      
      <li className="nav-item">
      <a className="nav-link" href="Book">Ambulance Booking</a>
    </li>
    <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Search</button>
    
  </form>
    <li className="nav-item">
    <a className="nav-link" href="/Login" id="margin" >Login</a>
  </li>
      </ul>
     
     
    </div>
  </div>
</nav>
</div>
</div>
</div>
        </>
    );
 };
 export default Navbar;