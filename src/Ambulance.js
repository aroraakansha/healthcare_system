import React,{useState} from "react";
import photo from "../src/images/contact.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Ambulance(){
  const navigate = useNavigate();
  const [Name,setName]=useState('');
  const [Phone,setphone]=useState('');
  const [Email,setemail]=useState('');
  const [Ambulanceno,setambulanceno]=useState('');
  const [Drivername,setdrivername]=useState('');
  const [Driverphone,setdriverno]=useState('');
  
    const[inputList,setinputList]=useState([{carNo:'',drivername:'',driverphone:''}]);
    const handleinputchange=(e,index)=>{
      const {name,value}=e.target;
      const list=[...inputList];
      list [index][name]=value;
      setinputList(list);
      
    }
    const handleremoveclick=index=>{
      const list=[...inputList];
      list.splice(index,1);
      setinputList(list);
    }
    const handleaddclick=()=>{
        setinputList([...inputList,{carNo:'',drivername:'',driverphone:''}]);
    }
    const handleSubmit = async () => {
      const resp = await axios.post("http://localhost:3001/ambulancereg", {
        name:Name,
        phone:Phone,
        email:Email,
               
      });
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
          navigate("/Bed");
        },  6000)
    };

    return (
        <>
        <div className="row">
        <div className="col-md-3">
          <img src={photo} className="img-fluid" alt="Responsive image" />
        </div>
        <section className="vh-100 col">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-9">
                <h1 className=" mb-4 text-center">Ambulance Details</h1>

                <div className="card border">
                  <div className="card-body">
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Hospital Name</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="@abc "
                          name="name"
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Phone No</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="@12345"
                          name="phone"
                          value={Phone}
                          onChange={(e) => setphone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <hr className="mx-n3" />

                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Email address</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="example@example.com"
                          name="email"
                          value={Email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <hr className="mx-n3" />

                    
                    <section>
                    {
                      inputList.map((x,i)=>{
                        return(
                    <div className="row">
                    <div className="col-md-6 mb-4">
                    
                      <div className="form-outline">
                      
                        <input
                          type="text"
                          name="carno"
                          className="form-control form-control-lg"
                          autoComplete="off"
                          onChange={e=>handleinputchange(e,i)}
                          // onChange={(e) => setemail(e.target.value)}
                          value={Ambulanceno}
                          required
                        />
                        
                        <label className="form-label">Ambulance Car No</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        name="drivername"
                        className="form-control form-control-lg"
                        autoComplete="off"
                        onChange={e=>handleinputchange(e,i)}
                       value={Drivername}
                     //   onChange={(e) => setFName(e.target.value)}
                        required
                      />
                      <label className="form-label">Driver Name</label>
                    </div>
                  </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          name="driverphone"
                          id="form3Example1n"
                          class="form-control form-control-lg"
                          onChange={e=>handleinputchange(e,i)
                          }
                          value={Driverphone}
                        //  onChange={(e) => setLName(e.target.value)}
                          required
                        />
                    
                      
                        <label className="form-label mt-4 mx-4">Driver Phone No</label>
                        {
                          inputList.length!==1 && <button type="button" className="btn btn-primary btn-lg mx-1 "
                          onClick={()=>handleremoveclick(i)} >Remove</button>}
                        
                       { inputList.length-1==i && <button type="button" className="btn btn-primary btn-lg "
                        onClick={handleaddclick} >Add More</button>}
                      </div>
                    </div>
                  </div>
     ); })} 
                  </section>
                        
                    <hr className="mx-n3" />

                    <hr className="mx-n3" />

                    <div className="px-5 py-4">
                      <button type="button" className="btn btn-primary btn-lg"
                       onClick={() => handleSubmit()}
                      >
                        
                        Submit
                      </button>
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
export default Ambulance;