import React, {useState, useEffect} from 'react';
import {Button, Form, Col,ProgressBar } from 'react-bootstrap';
import axios from "axios";


const BarberSignUp = ({handleBarberClose,handleBarberScheduleShow}) => {

    const [firstName, setFirstName] = useState("firstName");
    const [lastName, setLastName] = useState("lastName");
    const [email, setEmail] = useState("email");
    const [password, setPassword] = useState("password");
    const [error, setError] = useState(false)
    
    const addBarber = async (event) => {
        event.preventDefault();
        console.log("here")
        axios.post('/api/barber-signup',{firstName,lastName,email,password}).then((result) => {
            if(result.data.error){
                setError(true)
            }else{
                handleBarberClose()
                handleBarberScheduleShow()
            }
        }).catch((e) =>{
            console.log(e)
        })
    }

    return(
    <>   
    <div>
    <Form onSubmit = {(event) => addBarber(event) }>
        {error ? <h6 style={{color: "red"}}>Email Already Taken!!</h6> : ''}
        <Form.Row>
        <Form.Group onChange={(event) => {setFirstName(event.target.value)}} as={Col} md="4">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstName" placeholder="First Name" />
        </Form.Group>
        <Form.Group onChange={(event) => {setLastName(event.target.value)}} as={Col} md="4">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastName" placeholder="Last Name" />
        </Form.Group>
        
        </Form.Row>
        <Form.Row>
        <Form.Group  onChange={(event) => {setEmail(event.target.value)}} as={Col} md="4" controlId="formGridEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="jack@unionBarber.com" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group  onChange={(event) => {setPassword(event.target.value)}} as={Col} md="4" controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Form.Row>
        
        <ProgressBar now={50} />

        <br/>
        <div>
            
        <Button variant="primary" type="submit">
        Submit
        </Button>
        </div>
    </Form>

    </div>
    
    </>
)}

export default BarberSignUp;