import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <h2>Sign In</h2>
            <div className="signin_btn">
                <Link to="/oauth2/authorization/github">
                    <p>Sign in with GitHub</p>
                </Link>
            </div>
        </div>
    );
}

export default Login;