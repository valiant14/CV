import React from "react";
import {Col,Row,Card,Button} from 'react-bootstrap'
import './button.scss'
const ProjectBTN = () => {
    return (
        <>
        <Card >
            <Card.Header as="h5" className="btnTitle">Simple Button</Card.Header>
            <Card.Body className="bg-darker">
                <button className="BtnThis">
                    Click Me
                </button>
            </Card.Body>
        </Card>
        </>
    )
}

export default ProjectBTN