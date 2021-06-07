import React from "react";
import {Col, Row} from "react-bootstrap";
import Author from "./Author";
const AuthorList:React.FC = () => {
    return (
        <Row>
            <Col xs={12}>
              <Author/>
              <Author/>
              <Author/>
            </Col>
        </Row>

    )
}

export default AuthorList;