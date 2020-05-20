import React, {useState, useEffect} from 'react';
import {CardColumns, Card,Button, Modal, Form, Col} from 'react-bootstrap'
import axios from 'axios';
import { useParams} from "react-router-dom";
import { Laptop, PersonFill, Calendar } from 'react-bootstrap-icons';



const SearchResult = () => {
    const [ searchResult, setSearchResult] = useState([])
    const [ searchValue, setSearchValue] = useState(useParams().name)
    const [ searchFound, setSearchFound] = useState(false)

    useEffect(()=>{
        axios.post('/api/search-result',{searchValue}).then((result) => {
            console.log(result.data)
            if(result.data[0] != undefined){
                setSearchResult(result.data)
                setSearchFound(true)
            }else{
                alert("Search Result Not Found!!!")
                
            }
            
        })
    },[])

    return(
        <>
        <CardColumns>
        {searchResult.map((info) => (
            <Card ><Card.Body>
            <Card.Title><PersonFill color="royalblue" size={25} />
                {info.firstName.charAt(0).toUpperCase() + info.firstName.slice(1)} {info.lastName.charAt(0).toUpperCase() + info.lastName.slice(1)}</Card.Title>
            <Card.Text><Laptop color="royalblue" size={25} />Contact Info:  {info.email}
            <br/>
            <Calendar color="royalblue" size={25} />Schedule: <br/>
            {info.days}
            <br/>
            {info.times}
            </Card.Text></Card.Body></Card>
))}
        </CardColumns>
        </>
    )
}

export default SearchResult;