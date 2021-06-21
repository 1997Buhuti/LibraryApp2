import React, {FC, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import AuthorList from "./AuthorList";
import {Plus} from "react-feather";
import AuthorForm from "./AuthorForm";

type AuthorsProps = {
    authors: IAuthor[];
    setAuthors: (author:IAuthor[]) => void;
};
const Authors: FC<AuthorsProps> = (props) => {
    const {authors,setAuthors}=props;
    const [authorFormVisible, setAuthorFormVisible] = useState<Boolean>(false);
    const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null)
    const [authorIndexToUpdate, setAuthorIndexToUpdate] = useState<number | null>(null)

    useEffect(() => {
        if (!authorToUpdate) {
            return;
        }

        setAuthorFormVisible(true);
    }, [authorToUpdate])


    const handleAddAuthorButtonClicked = () => {
        setAuthorToUpdate(null);
        setAuthorFormVisible(true);
    }
    const handleAddAuthor = (newAuthor: IAuthor) => {
        const newAuthorList: IAuthor[] = authors.slice();
        newAuthorList.push(newAuthor);
        setAuthors(newAuthorList);
    }
    const handleDeleteAuthor = (id: string) => {
        setAuthors(authors.filter(author => author.id !== id))
    }

    const handleUpdateAuthorRequest = (author: IAuthor, index: number) => {
        setAuthorToUpdate(author);
        setAuthorIndexToUpdate(index);
    }

    const handleAuthorUpdate = (updatedAuthor: IAuthor, index: number | null) => {
        if (!index) {
            return;
        }
        const newAuthorList: IAuthor[] = authors.slice();
        newAuthorList.splice(index - 1, 1, updatedAuthor);
        setAuthors(newAuthorList)
        setAuthorToUpdate(null);
        setAuthorIndexToUpdate(null);
        setAuthorFormVisible(false);
    }

    return (
        <Container className="px-md-6 px-sm-5 px-xs-5">
            <Row>
                <Col xs={12} className="text-xs-left authors-title px-0 pb-1">
                    Authors
                </Col>
            </Row>
            <Row>
                <Col xs={12} className=" author-list-container px-0 pt-4">
                    <AuthorList authors={authors} handleDeleteAuthor={handleDeleteAuthor}
                                handleUpdateAuthorRequest={handleUpdateAuthorRequest}/>
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col xs={12} className="add-author px-0">
                    <Plus onClick={() => handleAddAuthorButtonClicked()} className="plus-btn"/>
                    <span onClick={() => handleAddAuthorButtonClicked()}>Add Author</span>
                </Col>
            </Row>
            <Row>
                <Col className="author-form-container px-0" xl={9} xs={12}>
                    {authorFormVisible && <AuthorForm setAuthorFormVisible={setAuthorFormVisible}
                                                      handleAddAuthor={handleAddAuthor}
                                                      authorToUpdate={authorToUpdate}
                                                      authorIndexToUpdate={authorIndexToUpdate}
                                                      handleAuthorUpdate={handleAuthorUpdate}
                    />}
                </Col>
                <Col className="mt-3" xl={3}/>
            </Row>
        </Container>
    );
}

export default Authors;