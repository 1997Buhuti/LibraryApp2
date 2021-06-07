import React from "react";
import {Col, Row} from "react-bootstrap";
import {Trash2, Edit} from 'react-feather';

const Author: React.FC = () => {

    const handleButton=()=>{
        console.log('clicked')
    }
    return (
        <Col xs={12} className=" author-info pt-2 pb-2">
            <Row>
                <Col className="author-info-text">
                    Book 1
                </Col>
                <Row className=" icons mx-0">
                    <Col className="pr-1" >
                        <Edit className="edit-button" onClick={()=> handleButton()}/>
                    </Col>
                    <Col>
                        <Trash2 className=" delete-button pr-1" onClick={()=> handleButton()}/>
                    </Col>
                </Row>

            </Row>

        </Col>
    )
}

export default Author;