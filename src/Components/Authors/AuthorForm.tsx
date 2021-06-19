import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {v4 as uuidv4} from 'uuid'

type AuthorFormProps = {
    setAuthorFormVisible: (params: boolean) => void;
    handleAddAuthor: (author: IAuthor) => void;
    authorToUpdate: IAuthor | null;
    authorIndexToUpdate: number | null;
    handleAuthorUpdate: (updatedAuthor: IAuthor, index: number | null) => void;
}
const AuthorForm: FC<AuthorFormProps> = (props) => {

    const [validated, setValidated] = useState(false);
    const [authorName, setAuthorName] = useState<string | null>("")

    useEffect(() => {
        if (!props.authorToUpdate) {
            setAuthorName("");
            return;
        }
        setAuthorName(props.authorToUpdate.name);
    }, [props.authorToUpdate])

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setValidated(true);
        if (authorName === "" || null) {
            return;
        }
        if (props.authorToUpdate) {
            props.handleAuthorUpdate({...props.authorToUpdate, name: authorName},
                props.authorIndexToUpdate);
            setAuthorName(null);
            return;
        }
        props.handleAddAuthor({name: authorName, id: uuidv4()});
        setAuthorName(null);
        props.setAuthorFormVisible(false);
    };

    const handleCloseForm = () => {
        props.setAuthorFormVisible(false);
    }

    //Adding the new Author Name
    const handleAuthorNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthorName(e.target.value);
    }

    return (
        <Col xs={12}>
            <Row>
                <Col xs={10} className="author-form-title px-0 mt-3 pb-1">
                    <u> {!props.authorToUpdate ? 'Create' : 'Update'} Author</u>
                </Col>
                <Col xs={2} className="close-button px-0 mt-3 pt-2 pb-1 text-right">
                    <XCircle onClick={() => handleCloseForm()}/>
                </Col>
            </Row>

            <Row xs={12}>
                <Col className="px-0" xs={12}>
                    <Form className="author-form" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row className="author-name-group">
                            <Form.Group as={Col} lg={{span: 11, offset: 1}} xs={12} controlId="validationCustom01">
                                <Form.Label className="author-input-label">Name Of The Author</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    size="sm"
                                    className="author-input"
                                    value={authorName ? authorName : ''}
                                    onChange={handleAuthorNameChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please Fill Empty Field!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="float-right pt-4">
                            <Button className="submit-author-btn pl-4 pr-4 pt-0 pb-0 " type="submit">
                                {props.authorToUpdate ? 'Update' : 'Create'}</Button>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
}

export default AuthorForm;