import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = () => {
    var [email, setEmail] = useState("email");
    var [password, setPassword] = useState("password");
    var [userType, setUserType] = useState("storeworker")

    let history = useHistory();

    var loginForm = async (event) => {
        event.preventDefault();
        console.log("here")
        axios.post('/api/login',{email, password, userType}).then((result) => {
           console.log(result)
            if(result.data.true){
               history.push('/barber-profile')
           }else{
               alert("Wrong Password")
           }
        }).catch((error) =>{
            console.log(error)
        })

    }
    return(
        <>
            <div>
            <Form onSubmit = {(event) => {loginForm(event)}}>
            <Form.Group onChange={(event) => {setEmail(event.target.value)}} controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group onChange={(event) => {setPassword(event.target.value)}} controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
            <Form.Label>User Type</Form.Label>
            <Form.Control onChange={(event) => {setUserType(event.target.value)}} type="userType" as="select">
            <option value="storeworker">Store Worker</option>
            <option value="travelworker">Travel Worker</option>
            </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                 Submit
            </Button>
            </Form>
            </div>
        </>

    )}

    export default Login;