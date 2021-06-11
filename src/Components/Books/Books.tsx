import React, {FC, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Plus} from "react-feather";
import BookList from "./BookList";
import BookForm from "./BookForm";

type BooksProps = {
    authorsAvailable: () => IAuthor[]
};
const Books: FC<BooksProps> = (props) => {
    const [BookFormVisible, setBookFormVisible] = useState<Boolean>(false);
    const [Books, setBooks] = useState<IBook[]>([])
    const handleAddBookButtonClicked = () => {
        setBookFormVisible(true);
    }
    const  handleAddBook = (newBook:IBook) => {
        const newBookList:IBook[]=Books.slice();
        newBookList.push(newBook);
        setBooks(newBookList);
    }
    return (
        <Container className="px-md-6 px-sm-5 px-xs-5" style={{border: '1px solid aqua '}}>
            <Row>
                <Col xs={12} className="text-xs-left books-title px-0 pb-1">
                    Books
                </Col>
            </Row>
            <Row>
                <Col xs={12} className=" book-list-container px-0 pt-4" style={{border: '2px solid black'}}>
                    <BookList/>
                </Col>
            </Row>
            <Row className="mt-3 mb-4" style={{border: '2px solid black'}}>
                <Col xs={12} className="add-book px-0" style={{border: '1px solid blue'}}>
                    <Plus className="plus-btn" onClick={() => handleAddBookButtonClicked()}/>
                    <span onClick={() => handleAddBookButtonClicked()}>Add Book</span>
                </Col>
            </Row>
            <Row>
                <Col className="book-form-container" xl={9} xs={12} style={{border: '1px solid blue'}}>
                    {BookFormVisible && <BookForm setBookFormVisible={setBookFormVisible}
                                                  handleAddBook={handleAddBook}
                    />}
                </Col>
                <Col className="mt-3" xl={3} style={{border: '1px solid brown'}}/>
            </Row>
        </Container>
    );
}

export default Books;