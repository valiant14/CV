import React from "react";
import {Col,Row,Card,Button} from 'react-bootstrap'
import './text.css'

const Text = () => {
    return (
        <>
        <Card className="mt-3">
            <Card.Header as="h5" className="btnTitle">Text</Card.Header>
            <Card.Body className="bg-Text">
                <p className="text">Valiant Ocampo</p>
            </Card.Body>
        </Card>
        </>
    )
}

export default Text