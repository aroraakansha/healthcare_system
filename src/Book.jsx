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
        <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">Name</label>
   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name"/>
 </div>
 <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Phone No</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobileno@12345"/>
 </div>
 <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Email address</label>
 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
 </div>

 <select class="form-select" aria-label="Default select example">
  <option selected>state</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 <div class="col-12">
 <button class="btn btn-primary" type="submit">Submit</button>
 </div>
        </form>
        </div>
        </div>
        </div>
        
         </>
    )
}
export default BookNow;