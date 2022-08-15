import UserInput from "./UserInput";
import './LoginBox.css';
import { User, Key } from "phosphor-react";

function LoginBox() {
    return (
        <div className="login">
            <h1 className='login-topic'>Login Page</h1>
            <div className="input-box">
                <User className="icon" size={32.5} />
                <UserInput hint='Username' type='username'/>
            </div>
            <div className="input-box">
                <Key className="icon" size={33} />
                <UserInput hint='Password' type='password' />
            </div>
            <buttom className="button">Login</buttom>
            <p className="make-account">Don't have any account? <a href="https://google.com">Click here to create one!</a></p>
        </div>
    );
}

export default LoginBox;