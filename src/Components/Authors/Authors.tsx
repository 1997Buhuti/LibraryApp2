import React, {FC, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import AuthorList from "./AuthorList";
import {Plus} from "react-feather";
import AuthorForm from "./AuthorForm";

const Authors: FC = () => {
    const [AuthorFormVisible, setAuthorFormVisible] = useState<Boolean>(false);
    const [Authors, setAuthors] = useState<IAuthor[]>([])

    const handleAddAuthorButtonClicked = () => {
        setAuthorFormVisible(true);
    }
    const handleAddAuthor = (newAuthor:IAuthor) => {
        const newAuthorList:IAuthor[]=Authors.slice();
        newAuthorList.push(newAuthor);
        setAuthors(newAuthorList);
    }
    const handleDeleteAuthor=(id:string)=>{
        setAuthors(Authors.filter(author=>author.id!==id))
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
                    <AuthorList Authors={Authors} handleDeleteAuthor={handleDeleteAuthor}/>
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col xs={12} className="add-author">
                    <Plus onClick={() => handleAddAuthorButtonClicked()} className="plus-btn"/>
                    <span onClick={() => handleAddAuthorButtonClicked()}>Add Author</span>
                </Col>
            </Row>
            <Row>
                <Col className="author-form-container" xl={9} xs={12} style={{border: '1px solid blue'}}>
                    {AuthorFormVisible && <AuthorForm setAuthorFormVisible={setAuthorFormVisible}
                                                      handleAddAuthor={handleAddAuthor}
                    />}
                </Col>
                <Col className="mt-3" xl={3} style={{border: '1px solid brown'}}/>
            </Row>
        </Container>
    );
}

export default Authors;