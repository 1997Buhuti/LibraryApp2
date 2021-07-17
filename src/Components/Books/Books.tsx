import React, {FC, useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Plus} from "react-feather";
import BookList from "./BookList";
import BookForm from "./BookForm";

type BooksProps = {
    authors: IAuthor[];
};
const Books: FC<BooksProps> = (props) => {
    const {authors} =props;
    const [bookFormVisible, setBookFormVisible] = useState<Boolean>(false);
    const [books, setBooks] = useState<IBook[]>([])
    const [bookToUpdate, setBookToUpdate] = useState<IBook | null>(null)
    const [bookIndexToUpdate, setBookIndexToUpdateToUpdate] = useState<number | null>(null)

    useEffect(() => {
        if (!bookToUpdate) {
            return;
        }
        setBookFormVisible(true);
    }, [bookToUpdate])

    const handleAddBookButtonClicked = () => {
        setBookToUpdate(null);
        setBookFormVisible(true);
    }
    const handleAddBook = (newBook: IBook) => {
        const newBookList: IBook[] = books.slice();
        newBookList.push(newBook);
        setBooks(newBookList);
    }
    const handleUpdateBookRequest = (book: IBook, index: number) => {
        setBookToUpdate(book);
        setBookIndexToUpdateToUpdate(index);
    }
    const handleBookUpdate = (updatedBook: IBook, index: number | null) => {
        if (!index) {
            return;
        }
        const newBookList: IBook[] = books.slice();
        newBookList.splice(index, 1, updatedBook);
        setBooks(newBookList);
        setBookToUpdate(null);
        setBookIndexToUpdateToUpdate(null);
        setBookFormVisible(false);
    }
    const handleDeleteBook = (id: string) => {
        setBooks(books.filter(book => book.id !== id));
    }
    return (
        <Container className="px-md-6 px-sm-5 px-xs-5">
            <Row>
                <Col xs={12} className="text-xs-left books-title px-0 pb-1">
                    Books
                </Col>
            </Row>
            <Row>
                <Col xs={12} className=" book-list-container px-0 pt-4">
                    <BookList books={books} handleDeleteBook={handleDeleteBook}
                              handleUpdateBookRequest={handleUpdateBookRequest}/>
                </Col>
            </Row>
            <Row className="mt-3 mb-4">
                <Col xs={12} className="add-book px-0">
                    <Plus className="plus-btn" onClick={() => handleAddBookButtonClicked()}/>
                    <span onClick={() => handleAddBookButtonClicked()}>Add Book</span>
                </Col>
            </Row>
            <Row>
                <Col className="book-form-container px-0" xl={9} xs={12}>
                    {bookFormVisible && <BookForm setBookFormVisible={setBookFormVisible}
                                                  handleAddBook={handleAddBook}
                                                  authorsAvailable={authors}
                                                  bookToUpdate={bookToUpdate}
                                                  bookIndexToUpdate={bookIndexToUpdate}
                                                  handleBookUpdate={handleBookUpdate}

                    />}
                </Col>
                <Col className="mt-3" xl={3}/>
            </Row>
        </Container>
    );
}

export default Books;