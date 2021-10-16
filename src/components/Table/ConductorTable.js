import React from 'react'
import CardHeader from 'components/Card/CardHeader'

export default function ConductorTable() {
    return (
        <div>
             <div>

           
            <CardHeader>
                <div>
                 <nav className="navbar navbar-light bg-light justify-content-between" >
                  <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
                </div>
           
            <table className="table">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Driving License</th>
            <th scope="col">Bus Number</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Route Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><button type="button" class="btn btn-danger">Delete</button> <button type="button" class="btn btn-warning">Edit</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><button type="button" class="btn btn-danger">Delete</button> <button type="button" class="btn btn-warning">Edit</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><button type="button" class="btn btn-danger">Delete</button> <button type="button" class="btn btn-warning">Edit</button></td>
          </tr>
        </tbody>
      </table>
            </CardHeader>
        </div>
        </div>
    )
}
