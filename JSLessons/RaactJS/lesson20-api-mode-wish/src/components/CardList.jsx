import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container,Row } from 'react-bootstrap'
import SingleCard from './SingleCard';

const CardList = () => {
    const [apiData,setApiData]= useState([]);
    useEffect(()=>{
        const fetchApi = async()=>{
            const comingData = await axios.get('https://fakestoreapi.com/products')
            setApiData(comingData.data)
        }
        fetchApi();
    },[])
  return (
    <Container>
        <Row >
        {apiData.map(fd=>{
            return  <SingleCard photo={fd.image} title={fd.title} key={fd.id}/>
        })}
        </Row>
    </Container>
  )
}

export default CardList