import React, {ChangeEvent, FC, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
// @ts-ignore
import * as CurrencyFormat from 'react-currency-format';
import Select from "react-select/base";
import {v4 as uuidv4} from "uuid";

type BookFormProps={
    setBookFormVisible:(params:boolean)=>void;
    handleAddBook :(Book:IBook)=>void
}
const BookForm: FC<BookFormProps>= (props) => {

    const [validated, setValidated] = useState(false);
    const[BookTitle,setBookTitle]=useState<string|null>("");
    // Book Price
    const [price, setPrice] = useState<string>("");
    // Book Author
    const [bookAuthor, setBookAuthor] = useState<string>("Author 1");
    //const [selectedAuthor, setSelectedAuthor] = useState<ValueType<ReactSelectOption, any> | null>(null);

    const handleCloseButton=()=>{
        props.setBookFormVisible(false);
    }
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);
        if ((BookTitle===""||null)||(price===""||null)||(bookAuthor===""||null)){
            return;
        }
        props.handleAddBook({title:BookTitle, price:price,author:bookAuthor,id:uuidv4()});
        setBookTitle(null);
        setPrice("");
        setBookAuthor("");

        props.setBookFormVisible(false);
    };
    return (
        <Col xs={12} >
            <Row>
                <Col xs={10} className="book-form-title px-0 mt-3 pb-1">
                    <u> Create Book</u>
                </Col>
                <Col xs={2} className="close-button px-0 mt-3 pt-2 pb-1 text-right">
                    <XCircle onClick={()=>handleCloseButton()}/>
                </Col>
            </Row>

            <Row xs={12}>
                <Col className="px-0" xs={12}>
                    <Form className="book-form" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} lg={{span:11,offset:1}} xs={12} controlId="validationCustom01">
                                <Form.Label className="book-input-label">Title Of The Book</Form.Label>
                                <Form.Control
                                    //required
                                    type="text"
                                    size="sm"
                                    className="book-input"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} lg={{span:11,offset:1}} xs={12} controlId="validationCustom01">
                                <Form.Label className="book-input-label">Price</Form.Label>
                                <CurrencyFormat
                                    style={{width: '100%'}}
                                    className="book-price-input"
                                    size="sm"
                                    inputMode="numeric"
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    onValueChange={
                                        (values: { formattedValue: any; value: any; }) => {
                                            const {formattedValue, value} = values;
                                        }
                                    }
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row >
                            <Form.Group as={Col} lg={{span:11,offset:1}} xs={12} controlId="validationCustom01">
                                <Form.Label className="book-input-label">Author</Form.Label>
                                <Select/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="float-right pt-4 ">
                            <Button className="submit-author-btn pl-4 pr-4 pt-0 pb-0 " type="submit">Create</Button>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
}

export default BookForm;