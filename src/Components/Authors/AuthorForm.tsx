import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import { v4 as uuidv4 } from 'uuid'

type AuthorFormProps={
    setAuthorFormVisible:(params:boolean)=>void;
    handleAddAuthor:(author:IAuthor)=>void;
    AuthorToUpdate:IAuthor|null;
    AuthorIndexToUpdate:number|null;
    handleAuthorUpdate:(updatedAuthor:IAuthor,index:number|null)=>void;
}
const AuthorForm: FC<AuthorFormProps> = (props) => {

    const [validated, setValidated] = useState(false);
    const[AuthorName,setAuthorName]=useState<string|null>("")

    useEffect(()=>{
        if(!props.AuthorToUpdate){
            setAuthorName("");
            return;
        }
        setAuthorName(props.AuthorToUpdate.name);
    },[props.AuthorToUpdate])

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);
        if (AuthorName===""||null) {
            return;
        }
        if(props.AuthorToUpdate){
            props.handleAuthorUpdate({...props.AuthorToUpdate, name:AuthorName},
                props.AuthorIndexToUpdate);
            setAuthorName(null);
            return;
        }
        props.handleAddAuthor({name:AuthorName , id:uuidv4()});
        setAuthorName(null);
        props.setAuthorFormVisible(false);
    };

    const handleCloseForm=()=>{
        props.setAuthorFormVisible(false);
    }

    //Adding the new Author Name
    const handleAuthorNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setAuthorName(e.target.value);
    }

    return (
        <Col xs={12}>
            <Row style={{border: '1px solid red'}}>
                <Col xs={10} className="author-form-title px-0 mt-3 pb-1" style={{border: '1px solid black'}}>
                    <u> {!props.AuthorToUpdate ? 'Create' : 'Update'}  Author</u>
                </Col>
                <Col xs={2} className="close-button px-0 mt-3 pt-2 pb-1 text-right">
                    <XCircle onClick={()=>handleCloseForm()} style={{cursor:"pointer"}}/>
                </Col>
            </Row>

            <Row xs={12}>
                <Col className="px-0" xs={12} style={{border: '1px solid magenta'}}>
                    <Form className="author-form" noValidate validated={validated} onSubmit={handleSubmit}
                          style={{border: '1px solid magenta'}}>
                        <Form.Row style={{border: '1px solid yellow'}}>
                            <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label className="author-input-label">Author name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    className="author-input"
                                    value={AuthorName ? AuthorName : ''}
                                    onChange={handleAuthorNameChange}
                                />
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

export default AuthorForm;