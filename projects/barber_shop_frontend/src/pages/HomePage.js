import React, {useState, useEffect} from 'react';
import {AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import {Modal, Image, Container, Row, Col} from 'react-bootstrap';
import Login from '../components/Login';
import AdminLogin from '../components/AdminLogin'
import BarberSignUp from '../components/BarberSignUp';
import BarberScheduleInit from '../components/BarberScheduleInit';
import bar from '../media/Bar.png';
import leftMain from '../media/LeftMain.png';
import rightMain from '../media/rightMain.png';
const HomePage = () => {
    const [loginShow, setLoginShow] = useState(false);
    const [barberScheduleShow, setBarberScheduleShow] = useState(false);
    const [barberShow, setBarberShow] = useState(false);
    const [userShow, setUserShow] = useState(false);
    

    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);

    
    const handleBarberClose = () => setBarberShow(false);
    const handleBarberShow = () => setBarberShow(true);

    const handleBarberScheduleClose = () => setBarberScheduleShow(false);
    const handleBarberScheduleShow = () => setBarberScheduleShow(true);


    
    const handleUserClose = () => setUserShow(false);
    const handleUserShow = () => setUserShow(true);

    
    return(
<>   
    <div className="center">
    <Container>
        <Row className="justify-content-md-center">
        <Col md="auto"><Image src={rightMain}/></Col>
        <Col md="auto"><Image src={bar}/></Col>
        <Col md="auto"><Image src={leftMain}/></Col>
            
        </Row>
        <Row>
            <Col ><AwesomeButton onPress={handleBarberShow} type="primary">Barber Sign Up</AwesomeButton></Col>
            <Col ><AwesomeButton onPress={handleUserShow} type="primary">Admin Login</AwesomeButton> </Col>
            <Col ><AwesomeButton onPress={handleLoginShow} type="primary">Loggin All Users</AwesomeButton></Col>
        </Row>
    </Container> 
    
    </div>
    

        
        <Modal size="lg" show={barberShow} onHide={handleBarberClose}>
            <Modal.Header closeButton>
            <Modal.Title>Barber Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body><BarberSignUp handleBarberScheduleShow={handleBarberScheduleShow} handleBarberClose={handleBarberClose}/></Modal.Body>
        </Modal>

        <Modal size="lg" show={barberScheduleShow} onHide={handleBarberScheduleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Barber Schedule <br/> <h6 style={{color: "red"}}>Everything is Required!! Please Fill Out Carefully</h6></Modal.Title>
            </Modal.Header>
            <Modal.Body><BarberScheduleInit/></Modal.Body>
        </Modal>

        
        <Modal show={userShow} onHide={handleUserClose}>
            <Modal.Header closeButton>
            <Modal.Title>Admin Login</Modal.Title>
            </Modal.Header>
            <Modal.Body><AdminLogin/></Modal.Body>
        </Modal>

        
        <Modal show={loginShow} onHide={handleLoginClose}>
            <Modal.Header closeButton>
            <Modal.Title>Barber Login</Modal.Title>
            </Modal.Header>
            <Modal.Body><Login/></Modal.Body>
        </Modal>
</>
)}
//<AwesomeButton type="primary">Loggin All Users</AwesomeButton>

export default HomePage;