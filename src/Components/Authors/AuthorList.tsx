import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Author from "./Author";

type AuthorListProps = {
    authors: IAuthor[];
    handleDeleteAuthor: (id: string) => void
    handleUpdateAuthorRequest: (author: IAuthor, index: number) => void
}
const AuthorList: React.FC<AuthorListProps> = (props) => {
    const {authors} = props;
    const [displayNoAuthor, setdisplayNoAuthor] = useState(false);

    useEffect(() => {
        if (authors.length === 0) {
            setdisplayNoAuthor(true);
        } else {
            setdisplayNoAuthor(false);
        }

    }, [authors])

    return (
        <Row className="mx-0">
            <Col className="px-0" xs={12}>
                <i>{displayNoAuthor ? 'No authors listed here' : ''}</i>
                {
                    props.authors.map((author, index) => {
                        return <Author author={author} number={index + 1} key={author.id}
                                       handleDeleteAuthor={props.handleDeleteAuthor}
                                       handleUpdateAuthorRequest={props.handleUpdateAuthorRequest}/>
                    })
                }
            </Col>
        </Row>
    );
}
export default AuthorList;