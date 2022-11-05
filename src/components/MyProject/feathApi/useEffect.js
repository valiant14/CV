import { useState, useEffect } from "react";
import {Col,Row,Card,Button} from 'react-bootstrap'
import axios from "axios";
import ProfileCard from "./profile";
const GetAPI = () => {
  const [items, setItems] = useState([]);

  const APIURL = "https://hub.dummyapis.com/employee?noofRecords=1&idStarts=1001"

  useEffect(() => {
    axios.get(APIURL).then(res => {
        setItems(res.data)
    })
  },[]);

  if (!items) return null;
  console.log(items)
  return (
    <ProfileCard items={items}/>
  )
}

export default GetAPI