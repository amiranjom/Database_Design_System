import React, {useState, useEffect} from 'react';
import axios from "axios";
import {CardGroup, Card,Button, Modal, Form, Col} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import TimePicker from 'react-bootstrap-time-picker';


const AdminPage = () => {
    const [info, setInfo] = useState({})
    const [email, setEmail] = useState();
    const [loginShow, setLoginShow] = useState(false);

    const [days, setDays] = useState([]);
    const [startTime, setStartTime] = useState(25200);
    const [endTime, setEndTime] = useState(79200);

    const [timePeriod, setTimePeriod] = useState(0);   
    let history = useHistory();


    return(
    <>
    <br/><br/>
    <h1>Admin Page</h1>
    
    <CardGroup className="center">
    <Card>Hello</Card>  
    </CardGroup>
  
    </>
)}


export default AdminPage;