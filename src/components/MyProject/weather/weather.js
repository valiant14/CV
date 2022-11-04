import React from "react";
import {Col,Row,Card,Button} from 'react-bootstrap'
import {sun} from 'material-icons'
import './weather.css'

const Weather = () => {
    return (
        <>
        <Card >
            <Card.Header as="h5" className="btnTitle">Weather Widget</Card.Header>
            <Card.Body className="bg-Weather">
            <div class="weatherContainer">
                <div class="background">
                    <div class="Circle1"></div>
                    <div class="Circle2"></div>
                    <div class="Circle3"></div>
                    <div class="content">
                        <h1 class="Condition"><i class="material-icons sun">wb_sunny</i> Sunny</h1>
                        <h1 class="Temp">72<span id="F">&#8457;</span></h1>
                        <h1 class="Time">09:35</h1>
                        <h1 class="Location"><i class="material-icons locationIcon"></i> Riyadh, KSA</h1>
                    </div>
                </div>
            </div>
            </Card.Body>
        </Card>
        </>
    )
}

export default Weather