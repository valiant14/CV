import React from "react";
import {Col,Row,Card,Button} from 'react-bootstrap'
import './profile.css'
import img from '../../../assets/valiant.jpg'
const ProfileCard = () => {
    return (
        <>
        <Card >
            <Card.Header as="h5" className="btnTitle">Profile Card</Card.Header>
            <Card.Body className="bg-profile">
                <div className="profileContainer">
                <div className="profileCard">
                    <div className="lines"></div>
                    <div className="imageBox">
                    <img src={img} alt="avatar"></img>
                    </div>
                    <div className="content">
                    <div className="details">
                        <h2>Valiant Ocampo <br/> <span>Front-end Developer</span></h2>
                        <div className="info">
                        <h3>93 <br/><span>Posts</span></h3>
                        <h3>170k <br/><span>Followers</span></h3>
                        <h3>842 <br/><span>Following</span></h3>
                        </div>
                        <div className="actions">
                        <button>Follow</button>
                        <button>Message</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}

export default ProfileCard