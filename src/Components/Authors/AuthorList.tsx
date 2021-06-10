import React from "react";
import {Col, Row} from "react-bootstrap";
import Author from "./Author";
type AuthorListProps={
    Authors:IAuthor[];
    handleDeleteAuthor:(id:string)=>void
    handleUpdateAuthorRequest:(author:IAuthor,index:number)=>void
}
const AuthorList:React.FC<AuthorListProps> = (props) => {
    return (
        <Row>
            <Col xs={12}>
                {
                    props.Authors.map((author,index)=>{
                        return<Author author={author} number={index+1} key={author.id}
                                      handleDeleteAuthor={props.handleDeleteAuthor}
                                      handleUpdateAuthorRequest={props.handleUpdateAuthorRequest}/>
                    })
                }
            </Col>
        </Row>
    );
}
export default AuthorList;