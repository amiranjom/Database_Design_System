import React, {useState, useEffect} from 'react';
import {Button, Form, Navbar, Nav, FormControl} from 'react-bootstrap';
import { useHistory } from "react-router-dom";


const Navbare = () => {
    const [search, setsearch] = useState('');
    let history = useHistory();

    const searching = (event) => {
        history.push(`/search-result/${search}`)
    }

    return(
        <>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Search Barber</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">About</Nav.Link>
        </Nav>
        <Form onChange={(event) => {setsearch(event.target.value)}} onSubmit={(event) => {searching(event)}} inline>
        <FormControl type="text" placeholder="Search First Name" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Navbare;