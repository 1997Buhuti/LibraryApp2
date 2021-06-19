import React, {FC, useEffect, useState} from "react";
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
    const [BookToUpdate, setBookToUpdate] = useState<IBook | null>(null)
    const [BookIndexToUpdate, setBookIndexToUpdateToUpdate] = useState<number | null>(null)

    useEffect(() => {
        if (!BookToUpdate) {
            return;
        }

        setBookFormVisible(true);
    }, [BookToUpdate])

    const handleAddBookButtonClicked = () => {
        setBookToUpdate(null);
        setBookFormVisible(true);
    }
    const handleAddBook = (newBook: IBook) => {
        const newBookList: IBook[] = Books.slice();
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
        console.log('updated book');
        console.log(updatedBook.author);
        const newBookList: IBook[] = Books.slice();
        newBookList.splice(index, 1, updatedBook);
        setBooks(newBookList);
        setBookToUpdate(null);
        setBookIndexToUpdateToUpdate(null);
        setBookFormVisible(false);
    }
    const handleDeleteBook = (id: string) => {
        setBooks(Books.filter(book => book.id !== id));
    }
    const authors = props.authorsAvailable();
    return (
        <Container className="px-md-6 px-sm-5 px-xs-5">
            <Row>
                <Col xs={12} className="text-xs-left books-title px-0 pb-1">
                    Books
                </Col>
            </Row>
            <Row>
                <Col xs={12} className=" book-list-container px-0 pt-4">
                    <BookList books={Books} handleDeleteBook={handleDeleteBook}
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
                <Col className="book-form-container" xl={9} xs={12}>
                    {BookFormVisible && <BookForm setBookFormVisible={setBookFormVisible}
                                                  handleAddBook={handleAddBook}
                                                  authorsAvailable={authors}
                                                  BookToUpdate={BookToUpdate}
                                                  BookIndexToUpdate={BookIndexToUpdate}
                                                  handleBookUpdate={handleBookUpdate}

                    />}
                </Col>
                <Col className="mt-3" xl={3}/>
            </Row>
        </Container>
    );
}

export default Books;