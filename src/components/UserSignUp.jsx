import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {
    const [data, setData] = useState(
        {
            "user_name": "",
            "user_password": "",
            "confirm_user_password": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        if (data.user_password !== data.confirm_user_password) {
            alert("Password Miss-match")
        }
        else {
            axios.post("http://localhost:8080/userSignUp", data)
                .then(
                    (response) => {
                        if (response.data.status == "Saved") {
                            alert("Sign Up Succesfully")
                        } else {
                            alert("Sign Up Failed")
                        }

                    }
                ).catch(
                    (error) => {
                        alert(error.message)
                    }
                )
        }
    }
    return (
        <div>
             <div class="alert alert-primary" role="alert">
                <center><b><h3>
                    New User Sign Up014Portal
                </h3></b></center>\
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div class="card w-50 mx-auto border-rounded text-bg-light border-info">
                            <div class="card-body">

                                <div className="row g-4">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Enter your Username</label>
                                        <input type="text" className="form-control" name='user_name' value={data.user_name} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Enter your Password</label>
                                        <input type="password" name="user_password" id="" className="form-control" value={data.user_password} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Re Enter your Password</label>
                                        <input type="password" name="confirm_user_password" id="" className="form-control" value={data.confirm_user_password} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <center>
                                            <button className="btn btn-success" onClick={readValue}>Sign UP</button>
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
    )
}

export default UserSignUp