import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import WelcomeScreen from "./WelcomeScreen";
import Authors from "./Authors/Authors";
import Books from "./Books/Books";

const Library=()=>{
    return(
        <Container fluid={true} className="Library-Container px-0">
            <Row className="Library mx-0">
                <Col className="px-0">
                    <WelcomeScreen/>
                </Col>
            </Row>
            <Row className=" mx-0 mb-5 pb-5" style={{border:'1px solid black '}}>
                <Col  md={{order: 'first', span: 6}} xs={{order: 'last', span: 12}}>
                    <Books/>
                </Col>
                <Col className="" md={6} xs={12}>
                   <Authors/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;