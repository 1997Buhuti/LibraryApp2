import {Col, Row} from "react-bootstrap";
import Book from "./Book";
import {FC} from "react";

type BookListProps={
    books:IBook[];
    //handleDeleteBook:(id:string)=>void
}
const BookList:FC<BookListProps> = (props) => {

    return (
        <Row className="mx-0" style={{border: '1px solid aqua '}}>
            <Col className="px-0" xs={12} style={{border: '1px solid blue '}}>
                {
                    props.books.map((book,index)=>{
                         return<Book book={book} key={book.id} index={index}/>
                    })
                }
            </Col>
        </Row>
    );
}
export default BookList;