import React, {useState, useEffect} from 'react';
import axios from "axios";
import {CardGroup, Card,Button, Modal, Form, Col} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import TimePicker from 'react-bootstrap-time-picker';


const BarberProfilePage = () => {
    const [info, setInfo] = useState({})
    const [email, setEmail] = useState();
    const [loginShow, setLoginShow] = useState(false);

    const [days, setDays] = useState([]);
    const [startTime, setStartTime] = useState(25200);
    const [endTime, setEndTime] = useState(79200);

    const [timePeriod, setTimePeriod] = useState(0);   
    let history = useHistory();


    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);

    useEffect(()=>{
        axios.get('/api/barber-profile').then((result)=>{
            if(result.data[0] === undefined){
              alert("Wrong Type of User Selected or You do Not have the Permission to be here!!!")
              history.push('/')
            }else{
            setInfo(result.data[0])
            setEmail(result.data[0].email)
        }})
    },[])

    const updateSchedule = (event) => {
        let time = ''
        time = time.concat(startTime/3600,'-',endTime/3600)
        axios.post('/api/update-schedule',{email,days,time}).then((result)=>{
         
          
      })
    }

    const handleLogout = (event) => {
      event.preventDefault();
      axios.get('/api/logout').then((result)=>{
        alert("Logout")
        history.push('/')
      })
    }



    
    const addDays = (event) => {
        if(!days.includes(event.target.value)){
            let newDay = days
            newDay.push(event.target.value)
            setDays(newDay)
        }else{
            let index = days.indexOf(event.target.value);
            let newDay = days.splice(index,1);
            setDays(newDay)
        }}

    const setTime = (event) => {
        let time = ''
        setTimePeriod(time.concat(startTime/3600,'-',endTime/3600))
        console.log(endTime)
        

    }

    const deleteAccount = (event) => {
      event.preventDefault()
      axios.post('/api/delete-account',{email}).then((result)=>{
         alert("Account Deleted")
         history.push('/')
          
      })
    }
    return(
    <>
    <br/>
    <br/>
    <h1>Barber Profile Page</h1>
    
    <CardGroup className="center">
  <Card>
    <Card.Body>
      <Card.Title>Your Schedule</Card.Title>
      <Card.Text>
        Days Working: {info.days} <br/>
        Time Working: {info.times}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Private Info</Card.Title>
      <Card.Text>
        Email: {info.email} <br/>
        First Name: {info.firstName} <br/>
        Last Name: {info.lastName} <br/>
        Type of Worker: {info.locationId ? "Store Worker" : "Travel Worker"} <br/>
        {info.locationId ? ("Store Location: " + info.Address) : "Range Mile: " + info.rangeMile }
      </Card.Text>
    </Card.Body>
  </Card>
        <Card>
            <Card.Title>Edit Account</Card.Title>
            <Card.Body>
            <Button onClick={(event) => deleteAccount(event)}>Delete Account</Button> <br/>
            <Button onClick={handleLoginShow}>Change Schedule</Button>
            <Button onClick={(event)=>handleLogout(event)}>Logout</Button>
        </Card.Body>
        </Card>
  
</CardGroup>

<Modal show={loginShow} onHide={handleLoginClose}>
            <Modal.Header closeButton>
            <Modal.Title>Change Schedule</Modal.Title>
            </Modal.Header>
            <Modal.Body><Form onSubmit={(event)=>{alert("Schedule Updated");updateSchedule(event)}}><Form.Row><Form.Group  onChange={(event) => {addDays(event)}} 
            as={Col} md="4" controlId="formGridEmail">
        <Form.Label>What Days can you Work ?</Form.Label>
        <Form.Check label="Monday" value="Monday" />
        <Form.Check label="Tuesday" value="Tuesday" />
        <Form.Check label="Wednesday" value="Wednesday" />
        <Form.Check label="Thursday" value="Thursday" />
        <Form.Check label="Friday" value="Friday" />
        <Form.Check label="Saturday" value="Saturday" />
        <Form.Check label="Sunday" value="Sunday" />
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group   as={Col} md="4" controlId="formGridPassword">
        <Form.Label>What Time can you Work ? <br/> NOTE: The Chosen time would apply for all the selected dates <br/> (Please Make Sure of that) </Form.Label>
        Starting Time: 
        <TimePicker onChange={(event) => {setStartTime(event)}} start="07:00" end="22:00" step={60} value={startTime} />
        Ending Time:
        <TimePicker onChange={(event) => {setEndTime(event);setTime(event)}} start="07:00" end="22:00" step={60} value={endTime} />

        </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">Submit</Button>
        </Form></Modal.Body>
        </Modal>
  
    </>
)}


export default BarberProfilePage;