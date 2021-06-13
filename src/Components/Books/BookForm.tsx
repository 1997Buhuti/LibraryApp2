import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
// @ts-ignore
import * as CurrencyFormat from 'react-currency-format';
import Select from "react-select";
import {v4 as uuidv4} from "uuid";
import {ValueType} from "react-select";

type BookFormProps={
    setBookFormVisible:(params:boolean)=>void;
    handleAddBook :(Book:IBook)=>void;
    authorsAvailable: IAuthor[];
    BookToUpdate:IBook|null;
    BookIndexToUpdate:number|null;
    handleBookUpdate:(updatedBook:IBook,index:number|null)=>void;
}
const BookForm: FC<BookFormProps>= (props) => {
    const authors=props.authorsAvailable;

    const [validated, setValidated] = useState(false);
    const[BookTitle,setBookTitle]=useState<string|null>("");
    // Book Price
    const [price, setPrice] = useState<string>("");
    // Book Author
    const [selectedAuthor, setSelectedAuthor] = useState<ValueType<ReactSelectOption,any> | null>(null);
    //authorOptions
    const [authorOptions, setAuthorOptions] = useState<ReactSelectOption[]>([]);

    useEffect(()=>{
        if(!props.BookToUpdate){
            setBookTitle("");
            return;
        }
        setBookTitle(props.BookToUpdate.title);
        setPrice(props.BookToUpdate.price);
    },[props.BookToUpdate])

    // Change book Title
    const handBookTitleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setBookTitle(e.target.value);
    }
    // Change book Author
    const handleBookPriceChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPrice(e.target.value);
    }
    // Change book Author
    const handleOnBookAuthorChange = (selectedOption: ValueType<ReactSelectOption, any>) => {
        setSelectedAuthor(selectedOption);
    };
    const [validateSelect,setValidateSelect]=useState<boolean>(false);

    useEffect(() => {
        const options: ReactSelectOption[] = authors ? authors.map((author: IAuthor, index: number) => {
            // @ts-ignore
            const authorOption: ReactSelectOption = {value: index + '', label: author.name};
            return authorOption;
        }) : [];

        setAuthorOptions(options);
    }, [authors]);

    useEffect(() => {
        if(selectedAuthor!==null){
            setValidateSelect(false);
        }
    }, [selectedAuthor]);


    const handleCloseButton=()=>{
        props.setBookFormVisible(false);
    }
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);

        if(selectedAuthor===null){
            setValidateSelect(true);
        }

        if ((BookTitle==="")||(price==="")||(selectedAuthor===null)){
            return;
        }
        if(props.BookToUpdate){
            props.handleBookUpdate({...props.BookToUpdate, title:BookTitle},
                props.BookIndexToUpdate);
            setBookTitle(null);
            setPrice("");
            setSelectedAuthor(null);
            return;
        }

        props.handleAddBook({title:BookTitle, price:price,author:selectedAuthor.toString(),id:uuidv4()});
        setBookTitle("");
        setPrice("");
        setSelectedAuthor(null);
        props.setBookFormVisible(false);
    };

    return (
        <Col xs={12} >
            <Row>
                <Col xs={10} className="book-form-title px-0 mt-3 pb-1">
                    <u>{!props.BookToUpdate ? 'Create' : 'Update'} Create Book</u>
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
                                    required
                                    type="text"
                                    size="sm"
                                    className="book-input"
                                    value={BookTitle? BookTitle:''}
                                    onChange={handBookTitleChange}
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
                                    value={price? price:''}
                                    className="book-price-input"
                                    size="sm"
                                    inputMode="numeric"
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    onChange={handleBookPriceChange}
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row >
                            <Form.Group as={Col} lg={{span:11,offset:1}} xs={12} controlId="validationCustom01">
                                <Form.Label className="book-input-label">Author</Form.Label>
                                <Select
                                    className="author-select"
                                    value={selectedAuthor}
                                    onChange={handleOnBookAuthorChange}
                                    options={authorOptions}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 0,
                                        colors: {
                                            ...theme.colors,
                                            primary: '',
                                            primary25: '',

                                        },
                                    })}
                                />
                                {validateSelect && <span style={{color:'#dc3545',fontSize:'small'}}>Please Fill Empty Field!</span>}
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="float-right pt-4 ">
                            <Button className="submit-author-btn pl-4 pr-4 pt-0 pb-0 " type="submit">
                                {props.BookToUpdate?'Update':'Create'}</Button>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
}

export default BookForm;