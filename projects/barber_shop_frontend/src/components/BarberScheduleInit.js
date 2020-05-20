import React, {useState, useEffect} from 'react';
import {Button, Form, Col,ProgressBar } from 'react-bootstrap';
import axios from "axios";
import TimePicker from 'react-bootstrap-time-picker';
import { useHistory } from "react-router-dom";



const BarberScheduleInit = () => {

    const [barberType, setBarberType] = useState("type");
    const [days, setDays] = useState([]);
    const [startTime, setStartTime] = useState(25200);
    const [endTime, setEndTime] = useState(79200);
    const [timePeriod, setTimePeriod] = useState('');

    const [locationId, setLocationId] = useState(1);

    const [showLocation, setShowLocation] = useState(false);

    const [locations, setLocations] = useState([]);

    
    let history = useHistory();

    const locationOptions = locations.map((loc)=>
    <option  value={loc.id}>{loc.Address}</option>
)


    const location = <>  <Form.Group onChange={(event) => {console.log(event.target.value); setLocationId(event.target.value)}}>
    <Form.Label>Choose Location</Form.Label>
    <Form.Control type="userType" as="select">
    {locationOptions}
    </Form.Control>
    </Form.Group></>

   



    useEffect(()=>{
        console.log(barberType)
        if(barberType === "storeworker"){
            setShowLocation(true)
            axios.get('/api/store-locations').then((result)=>{
                setLocations(result.data)
            })
        }else{
            setShowLocation(false)
        }
    },[barberType])


    
    const addSchedule = async (event) => {
        event.preventDefault();
        console.log(barberType, days, timePeriod)
        let time = ''
        time = time.concat(startTime/3600,'-',endTime/3600)
            
        axios.post('/api/barber-schedule-init',{barberType,days,time,locationId}).then((result) => {
            history.push('/barber-profile')

        }).catch((e) =>{
            console.log(e)
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
        event.preventDefault();
        console.log(startTime)
        console.log(endTime)
        return new Promise((resolve,reject) =>{
            let time = ''
            time = time.concat(startTime/3600,'-',endTime/3600)
            console.log(time)
            setTimePeriod(time)
            resolve("Done")
        })
        
    }
        

    return(
    <> 
    <div>
    <Form onSubmit = {async(event) => {await setTime(event) ;console.log(timePeriod);addSchedule(event)} }>
        <Form.Group onChange={(event) => {setBarberType(event.target.value)}}>
            <Form.Label style={{color: "red"}}>What Type of Service do you like to provide ? Choose One Only! <br/></Form.Label>
            
            <Form.Check inline label="Store Worker" value="storeworker" />
            
            <Form.Check inline label="Travel Worker" value="travelworker" />
            
        </Form.Group>
        {showLocation ? location : ''}
        <Form.Row>
        <Form.Group  onChange={(event) => {addDays(event)}} 
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
        <Form.Group   as={Col} md="4" controlId="formGridPassword">
        <Form.Label>What Time can you Work ? <br/> NOTE: The Chosen time would apply for all the selected dates <br/> (Please Make Sure of that) </Form.Label>
        Starting Time: 
        <TimePicker onChange={(event) => {console.log(event);setStartTime(event);console.log(startTime)}} start="07:00" end="22:00" step={60} value={startTime} />
        Ending Time:
        <TimePicker onChange={(event) => {console.log(startTime);console.log(event);setEndTime(event);console.log(endTime)}} start="07:00" end="22:00" step={60} value={endTime} />

        </Form.Group>
        </Form.Row>
        
        <ProgressBar now={90} />

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

export default BarberScheduleInit;