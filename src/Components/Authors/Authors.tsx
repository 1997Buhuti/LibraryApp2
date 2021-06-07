import React, {FC, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import AuthorList from "./AuthorList";
import {Plus} from "react-feather";
import AuthorForm from "./AuthorForm";


const Authors: FC = () => {
    const[AuthorFormVisible, setAuthorFormVisible]=useState<Boolean>(false);

    const handleAddAuthor=()=>{
         setAuthorFormVisible(true);
         console.log('clicked')
    }

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
                    <Plus onClick={()=>handleAddAuthor()} className="plus-btn"/>
                    <span onClick={()=>handleAddAuthor()}>Add Author</span>
                </Col>
            </Row>
            <Row>
                <Col className="author-form-container" xl={9} xs={12} style={{border:'1px solid blue'}}>
                    {AuthorFormVisible && <AuthorForm setAuthorFormVisible={setAuthorFormVisible}/>}
                </Col>
                <Col className="mt-3" xl={3} style={{border:'1px solid brown'}}/>
            </Row>
        </Container>
    );
}

export default Authors;