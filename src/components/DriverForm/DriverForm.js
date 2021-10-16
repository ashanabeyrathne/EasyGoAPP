import React from 'react'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from 'components/Card/CardHeader'

export default function DriverForm() {
    return (
        <div>
            <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="success">
            <h4>Driver</h4>
           
          </CardHeader>
          <CardBody>
        
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>

    <CardHeader plain color="success" xs="10rem">
    <form className="row g-3 needs-validation" >

<div className="col-md-4">
  <label for="name" className="form-label">Name</label >
  <input type="text" className="form-control" id="name" 
  
  
  />
  <div className="valid-feedback">
    Looks good!
  </div>
</div>

<div className="col-md-4">
  <label htmlFor="email" className="form-label">Email</label>
  <input type="text" className="form-control" id="email" 
   

  />
  <div className="valid-feedback">
    Looks good!
  </div>
</div>

<div className="col-md-4">
  <label htmlFor="mobile" className="form-label">Mobile</label>
  <input type="text" className="form-control" id="mobile"  
   

  />
  <div className="valid-feedback">
    Looks good!
  </div>
</div>

<div className="col-md-4">
  <label for="name" className="form-label">Driving License</label>
  <input type="text" className="form-control" id="name" 
  
  
  />
  <div className="valid-feedback">
    Looks good!
  </div>
</div>

<div className="col-md-4">
  <label htmlFor="Bus Number" className="form-label">Bus Number</label>
  <input type="text" className="form-control" id="Bus Number" 
   

  />
  <div className="valid-feedback">
    Looks good!
  </div>
</div>




<div className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
              <label className="form-check-label" htmlFor="gridRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
              <label className="form-check-label" htmlFor="gridRadios2">
                Female
              </label>
            </div>
            
          </div>
        </div>
      </div>

<div className="col-md-4">
  <label htmlFor="address" className="form-label">Address</label>
  <input type="text" className="form-control" id="address"  
   

  />
  <div className="valid-feedback">
    Looks good!
  </div>
</div>

<div className="col-md-4">
  <label for="name" className="form-label">Route Number</label >
  <input type="text" className="form-control" id="name" 
  
  
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
        </div>
    )
}
