import React, {useState, useEffect} from 'react';
import {Button, Form, Col} from 'react-bootstrap'

const BarberSignUp = () => {

    const [firstName, setFirstName] = useState("firstName");
    const [lastName, setLastName] = useState("lastName");
    const [email, setEmail] = useState("email");
    const [password, setPassword] = useState("password");
    
    const addBarber = async (event) => {
        event.preventDefault();
        
    }

    return(
    <>
    <h1>Sign UP</h1>    
    <div className="barber-signup">
    <Form onSubmit = {(event) => addBarber(event) }>
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
        <Form.Control type="email" placeholder="Example: jack@unionBarber.com" />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group  onChange={(event) => {setPassword(event.target.value)}} as={Col} md="4" controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        </Form.Row>
        <div className="button-barber">
        <Button variant="primary" type="submit">
        Submit
        </Button>
        </div>
    </Form>

    </div>
    
    </>
)}

export default BarberSignUp;