import React from "react";
import {Col, Row} from "react-bootstrap";
import WelcomeScreen from "./WelcomeScreen";

const Library=()=>{
    return(
        <Row className="Library mx-0">
            <Col className="px-0">
                <WelcomeScreen/>
            </Col>
        </Row>
    )
}

export default Library;