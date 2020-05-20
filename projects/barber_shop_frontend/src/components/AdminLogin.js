import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AdminLogin = () => {
    var [id, setId] = useState("id");
    var [password, setPassword] = useState("password");
    var [userType, setUserType] = useState("storeworker")

    let history = useHistory();

    var loginForm = async (event) => {
        event.preventDefault();
        if(id === "admin" && password === "barber"){
            console.log("Logged In")
            history.push('/admin')
        }else{
            alert("Wrong User/Pass")
        }

    }
    return(
        <>
            <div>
            <Form onSubmit = {(event) => {loginForm(event)}}>
            <Form.Group onChange={(event) => {setId(event.target.value)}} controlId="formBasicEmail">
            <Form.Label>Id</Form.Label>
            <Form.Control type="id" placeholder="Enter Id" />
            <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group onChange={(event) => {setPassword(event.target.value)}} controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                 Submit
            </Button>
            </Form>
            </div>
        </>

    )}

    export default AdminLogin;