import React from "react";
import {Col,Row,Card,Button} from 'react-bootstrap'
import './login.css'
import img from '../../../assets/valiant.jpg'

const Login = () => {
    return (
        <>
        <Card>
            <Card.Header as="h5" className="btnTitle">Login</Card.Header>
            <Card.Body className="bg-login">
            <div class="box">
                <div class="form">
                    <h2>Login</h2>
                    <div class="inputBox">
                        <input type="text" required="required"></input>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required"></input>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div class="links">
                        <a href="">Forgot password?</a>
                        <a href="">Sign Up</a>
                    </div>
                    <a href=""><input type="submit" value="Login"></input></a>
                </div>
            </div>
            </Card.Body>
        </Card>
        </>
    )
}

export default Login