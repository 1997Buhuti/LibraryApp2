import {Col, Row} from "react-bootstrap";
import Book from "./Book";
import React, {FC, useEffect, useState} from "react";

type BookListProps = {
    books: IBook[];
    handleDeleteBook: (id: string) => void;
    handleUpdateBookRequest: (book: IBook, index: number) => void;
}
const BookList: FC<BookListProps> = (props) => {
    const {books} = props;
    const [displayNoBook, setDisplayNoBook] = useState(false);

    useEffect(() => {
        if (books.length === 0) {
            setDisplayNoBook(true);
        } else {
            setDisplayNoBook(false);
        }

    }, [books])
    return (
        <Row className="mx-0">
            <Col className="px-0" xs={12}>
                <i>{displayNoBook ? 'No books listed here' : ''}</i>
                {
                    props.books.map((book, index) => {
                        return <Book book={book} key={book.id} index={index}
                                     handleDeleteBook={props.handleDeleteBook}
                                     handleUpdateBook={props.handleUpdateBookRequest}
                        />
                    })
                }
            </Col>
        </Row>
    );
}
export default BookList;