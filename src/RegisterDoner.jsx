import react from "react";
function RegisterDoner()
{
    return (
        <>
        <div >
        <h1 className="text-center">Register As A Doner</h1>
        </div>
        <div className="container contact_div border mx-6 my-6">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form>
        <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">Name</label>
   <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name" required/>
 </div>
 <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Phone No</label>
 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobileno@12345" required/>
 </div>
 <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Email address</label>
 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
 </div>
 <div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Date Of Birth</label>
 <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
 </div>
 <div class="mb-3">
 <label for="BloodGroup">Blood Group: </label>
<select id="blood" name="BloodGroup" form="BloodGroup">
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
</select>
 </div>
 
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
export default  RegisterDoner;