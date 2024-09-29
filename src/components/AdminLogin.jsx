import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const[data, setData] = useState({
        "admin_name": "",
        "admin_password": "" // changed to match input field name
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    let navigate=useNavigate()
    const readValue = () => {
        axios.post("http://localhost:8080/adminLogin", data)
            .then((response) => {
                if (response.data.status === "login success") {
                    navigate("/AdminDashBoard")
                } else if (response.data.status === "User Not Found") {
                    alert("UserName Does Not Exist");
                } else {
                    alert("Incorrect Password");
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div>
            <div className="alert alert-primary" role="alert">
                <center><b><h3>ADMIN LOGIN</h3></b></center>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card w-50 mx-auto border-rounded text-bg-light border-info">
                            <div className="card-body">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <label htmlFor="" className="form-label">Enter your Name</label>
                                        <input type="text" className="form-control" name='admin_name' value={data.admin_name} onChange={inputHandler}/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="" className="form-label">Enter your Password</label>
                                        <input type="password" name="admin_password" className="form-control" value={data.admin_password} onChange={inputHandler}/>
                                    </div>
                                    <div className="col-12">
                                        <center>
                                            <button className="btn btn-success" onClick={readValue}>Login</button>
                                            <br /><br /><Link to="/"> Back to home page</Link>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
