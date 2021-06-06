import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import WelcomeScreen from "./WelcomeScreen";

const Library=()=>{
    return(
        <Container fluid={true} className="Library-Container px-0">
            <Row className="Library mx-0 px-0">
                <Col className="px-0">
                    <WelcomeScreen/>
                </Col>
            </Row>
            <Row>
                <Col className="px-0">

                </Col>
            </Row>
        </Container>
    )
}

export default Library;