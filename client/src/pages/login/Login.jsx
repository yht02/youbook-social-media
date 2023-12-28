import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication";

function Login() {

    const {login} = useContext(AuthenticationContext);
    const [inputs, setInputs] = useState ({
        username:"",
        email:"",
        password:"",
        name:"",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await login(inputs);
            navigate("/")
        } catch (err) {
            setErr(err.response.data);
        }
    };

    const handleChange = (e) => {
        setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello Everyone</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae incidunt voluptatum veritatis in, voluptate expedita, esse ea tempore, unde minima reiciendis magni obcaecati! 
                        Ipsa voluptatum vero perspiciatis fugiat, temporibus dignissimos?
                    </p>
                    <span>Dont have an account?</span>
                    <Link style={{ width: "100%", display: 'flex', justifyContent: 'center', textDecorationLine:'none'}}to="/register">
                    <button>Register</button>
                    </Link>
                </div>


                <div className="right">
                    <h1>Login</h1>

                    <form>
                        <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                        
                        {err && err}
                        <button onClick={handleLogin}>Login</button>

                    </form>
                </div>
            </div>
        
        </div>
    )
}

export default Login
