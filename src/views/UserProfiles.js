import React,{useState} from "react"
import axios from "axios";
import CardHeader from 'components/Card/CardHeader'
import UserTable from "components/Table/UserTable";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import DriverForm from "components/DriverForm/DriverForm";
import DriverTable from "components/Table/DriverTable";
import ConductorForm from "components/ConductorForm/ConductorForm";
import ConductorTable from "components/Table/ConductorTable";

export default function UserProfiles() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newPassenger = {
      name,
      email,
      mobile,
      amount,
      address
    }

    axios.post("http://localhost:8070/passenger/add",newPassenger).then(()=>{
      alert("Passenger Added")
    }).catch((err)=>{
      alert(err)
    })
  }


  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="success">
            <h4>Passenger</h4>
           
          </CardHeader>
          <CardBody>
            
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
      <CardHeader plain color="success" xs="10rem">
           
      <form className="row g-3 needs-validation" onSubmit={sendData}>

        <div className="col-md-4">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" defaultValue="Ashan"
           onChange={(e)=>{

            setName(e.target.value);
          }}
          
          />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" className="form-control" id="email" defaultValue="@gmail.com" 
           onChange={(e)=>{

            setEmail(e.target.value);
          }}

          />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input type="text" className="form-control" id="mobile" defaultValue="0773165261" 
            onChange={(e)=>{

              setMobile(e.target.value);
            }}
  
          />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input type="text" className="form-control" id="amount" defaultValue="LKR"
            onChange={(e)=>{

              setAmount(e.target.value);
            }}
  
          />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>

        <div className="col-md-4">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" defaultValue="Address" 
            onChange={(e)=>{

              setAddress(e.target.value);
            }}
  
          />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>

      
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
          
          </CardHeader>
          <UserTable/>
          <DriverForm />
          <DriverTable />
          <ConductorForm />
          <ConductorTable />
          
    </div>
  )
}
