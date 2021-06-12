import React from "react";
import {Col, Row} from "react-bootstrap";
import Image from "../Resources/Images/Library_Anna_Hunko.webp"
const WelcomeScreen =()=>{
    return(
        <Row className="Welcome-Screen mx-0">
            <Col xs={12} className="Welcome-Screen-Title px-0">
                <h1>My Library</h1>
            </Col>

            <Col xs={12} className="px-0">
                <img src={Image} alt="Library_Image"/>
            </Col>
            <Col xs={12} className="photo-credits pt-2 pr-3 px-0">
                photo credits: <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content
                    =creditCopyText">Anna Hunko</a> on <a href="https://unsplash.com/?utm_source=
                    unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </Col>

        </Row>
    )
}
export default WelcomeScreen;
