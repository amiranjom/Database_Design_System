import React from 'react';
import {AwesomeButton, AwesomeButtonProgress } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import { Link } from 'react-router-dom';

const HomePage = () => (
<>   
    <h1>Hello, welcome to the Atlanta Virtual Barber Shop!</h1>
    <div className="test"> 
    <AwesomeButton  
    type="primary">
       <Link className="link" to="/barber-signup">Barber Sign Up</Link>
    </AwesomeButton>
    <AwesomeButton type="primary"><Link className="link" to="/barber-signup">User Sign Up</Link></AwesomeButton>
    
    </div>
    <div>
    <AwesomeButton type="primary"><Link className="link" to="/barber-signup">Loggin All Users</Link></AwesomeButton>
    </div>
</>
)


export default HomePage;