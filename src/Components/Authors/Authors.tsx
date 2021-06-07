import React, {FC} from "react";
import {Col, Container, Row} from "react-bootstrap";
import AuthorList from "./AuthorList";
import {Plus} from "react-feather";

const Authors: FC = () => {
    return (
        <Container className="px-md-6 px-sm-5 px-xs-5" style={{border: '1px solid aqua '}}>
            <Row>
                <Col xs={12} className="text-xs-left authors-title px-0 pb-1">
                    Authors
                </Col>
            </Row>
            <Row>
                <Col xs={12} className=" author-list-container px-0 pt-4">
                   <AuthorList/>
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col xs={12} className="add-author">
                    <Plus className="plus-btn"/> Add Author
                </Col>
            </Row>
            <Row>
                <p>CreateAuthorForm</p>
                <Col className="mt-3"/>
            </Row>
        </Container>
    );
}

export default Authors;