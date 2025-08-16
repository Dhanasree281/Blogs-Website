import React from 'react';
import signupBg from "../assets/Signup.jpg";
import './Login.css'; // optional now

function Login() {
    return(
        <div
            className="login-page"
            style={{ 
                backgroundImage: `url(${signupBg})`,
                width: '100%',
                height: '100vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <form className="login-form d-flex flex-column row-gap-2 justify-content-center">
                <h1>Please Login</h1>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-success w-100">Login</button>
            </form>
        </div>
    )
}

export default Login;
