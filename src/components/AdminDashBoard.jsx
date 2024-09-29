import React from 'react'

const AdminDashBoard = () => {
  return (
    
    <div>
         <div>
            <div className="alert alert-primary" role="alert">
                <center><b><h3>ADMIN's CONTROL</h3></b></center>
            </div>
            </div>
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin DashBoard</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">View_Bookings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search_Bookings</a>
        </li>
         {/* <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item"> 
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default AdminDashBoard