import {Col, Row} from "react-bootstrap";
import Book from "./Book";
import React, {FC, useEffect, useState} from "react";

type BookListProps={
    books:IBook[];
    handleDeleteBook:(id:string)=>void
}
const BookList:FC<BookListProps> = (props) => {
    const{books}=props;
    const [displayNoBook,setdisplayNoBook]= useState(false);

    useEffect(() => {
        if(books.length===0){
            setdisplayNoBook(true);
        }
        else{
            setdisplayNoBook(false);
        }

    }, [books])
    return (
        <Row className="mx-0" style={{border: '1px solid aqua '}}>
            <Col className="px-0" xs={12} style={{border: '1px solid blue '}}>
                <i>{displayNoBook?'No books listed here':''}</i>
                {
                    props.books.map((book,index)=>{
                         return<Book book={book} key={book.id} index={index} handleDeleteBook={props.handleDeleteBook}/>
                    })
                }
            </Col>
        </Row>
    );
}
export default BookList;