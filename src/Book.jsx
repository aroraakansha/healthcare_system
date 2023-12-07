import react from "react";
function BookNow()
{
    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Book An Ambulance Now</h1>
        </div>
       
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form>
        <div className="mb-3">
   <label for="exampleFormControlInput1" className="form-label">Name</label>
   <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name"/>
 </div>
 <div className="mb-3">
 <label for="exampleFormControlInput1" className="form-label">Phone No</label>
 <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="mobileno@12345"/>
 </div>
 <div className="mb-3">
 <label for="exampleFormControlInput1" className="form-label">Email address</label>
 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
 </div>
 <div className="mb-3">
 <label for="exampleFormControlInput1" className="form-label">Pincode</label>
 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
 </div>
 <div className="mb-3">
 <label for="exampleFormControlInput1" className="form-label">State</label>
 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
 </div>
 <div className="mb-3">
 <label for="exampleFormControlInput1" className="form-label">District</label>
 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
 </div>

 <div className="col-12">
 <button className="btn btn-primary mt-2" type="submit">Submit</button>
 </div>
        </form>
        </div>
        </div>
        </div>
        
         </>
    )
}
export default BookNow;