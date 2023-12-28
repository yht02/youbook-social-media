import "./register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Register() {

    const [inputs, setInputs] = useState ({
        username:"",
        email:"",
        password:"",
        name:"",
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
        } catch (err) {
            // Check if err.response is defined
            console.log(err.response)
            if (err.response) {
                setErr(err.response.data);
            } else {
                // Handle other types of errors
                setErr("An error occurred");
            }
        }
    };

    console.log(err)

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>YouBook</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae incidunt voluptatum veritatis in, voluptate expedita, esse ea tempore, unde minima reiciendis magni obcaecati! 
                        Ipsa voluptatum vero perspiciatis fugiat, temporibus dignissimos?
                    </p>
                    <span>Already have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>


                <div className="right">
                    <h1>Register</h1>

                    <form>
                        <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                        <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleClick}>Register</button>

                    </form>
                </div>
            </div>
        
        </div>
    )
}

export default Register

