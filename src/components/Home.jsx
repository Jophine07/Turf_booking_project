import React from 'react'
import bgimg from "../images/bgimg.png"
import foot from "../images/footer.png"
import "../Style/Home.css"
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <div class="alert alert-secondary" role="alert">
                <center> <h1 className="decorative-heading">JOPHINE'S TURF</h1></center>
            </div>
            <div
                style={{
                    backgroundImage: `url(${bgimg})`,
                    height: '500px', // Adjust the height as per your requirement
                    backgroundSize: 'cover', // This ensures the image covers the div
                    backgroundPosition: 'center', // Align the image to the center
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <div class="d-grid gap-2 col-6 mx-auto">
                <Link class="btn btn-primary" to="/adminLogin" role="button"><h1>ADMIN LOGIN</h1></Link>
                <Link class="btn btn-primary" to="/userLogin" role="button"><h1>USER LOGIN</h1></Link>
                <Link class="btn btn-primary" to="/usersignup" role="button"><h1>User SignUp</h1></Link>
                    
                   

                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url(${foot})`,
                    height: '150px', // Adjust the height as per your requirement
                    backgroundSize: 'cover', // This ensures the image covers the div
                    backgroundPosition: 'center', // Align the image to the center
                    backgroundRepeat: 'no-repeat'
                }}>

            </div>

        </div>

    )
}

export default Home