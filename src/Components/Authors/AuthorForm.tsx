import React, {ChangeEvent, FC, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

type AuthorFormProps={
    setAuthorFormVisible:(params:boolean)=>void;
}
const AuthorForm: FC<AuthorFormProps> = (props) => {
    const [validated, setValidated] = useState(false);
    //const [isFormClosed, setIsFormClosed] = useState<Boolean>(false)
    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        if (e.target.value === "") {
            e.preventDefault();
            e.stopPropagation();
        }
        e.preventDefault();
        setValidated(true);
    };
    const handleCloseForm=()=>{
        props.setAuthorFormVisible(false);
    }
    return (
        <Col xs={12}>
            <Row style={{border: '1px solid red'}}>
                <Col xs={10} className="author-form-title px-0 mt-3 pb-1" style={{border: '1px solid black'}}>
                    <u>Create Author</u>
                </Col>
                <Col xs={2} className="close-button px-0 mt-3 pt-2 pb-1 text-right">
                    <XCircle onClick={()=>handleCloseForm()} style={{cursor:"pointer"}}/>
                </Col>
            </Row>

            <Row>
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