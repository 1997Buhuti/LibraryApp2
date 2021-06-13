import React, {useState} from "react";
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Trash2, Edit} from 'react-feather';
import DeleteBookModal from "./DeleteBookModal";

type bookProps = {
    book: IBook;
    index: number;
    handleDeleteBook:(id:string)=>void
    handleUpdateBook:(book:IBook,index:number)=>void
}
const showEditTip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
        Edit author name
    </Tooltip>
);
const showDeleteTip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
        Delete author name
    </Tooltip>
);
const Author: React.FC<bookProps>= (props) => {

    const [show, setShow] = useState(false);
    //handler for the delete button
    const handleDeleteButton = () => {
        setShow(true);
    }

    const acceptDeleteBookAction = () => {
        props.handleDeleteBook(props.book.id);
        setShow(false);
    }
    const refuseDeleteBookAction = () => {
        setShow(false);
    }
    const handleEditButton = () => {
        props.handleUpdateBook(props.book, props.index)
    }
    return (
        <Col xs={12} className=" book-info pt-2 pb-2">
            <Row>
                <Col className="book-info-text px-0">
                    {props.index+1}.{props.book.title}
                </Col>
                <Row className=" icons mx-0">
                    <Col className="pr-1">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{show: 250, hide: 400}}
                            overlay={showEditTip}
                        >
                            <Edit className="edit-button" onClick={() => handleEditButton()}/>
                        </OverlayTrigger>
                    </Col>
                    <Col>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{show: 250, hide: 400}}
                            overlay={showDeleteTip}
                        >
                            <Trash2 className=" delete-button pr-1" onClick={() => handleDeleteButton()}/>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <DeleteBookModal
                    bookToDelete={props.book.title?props.book.title:""}
                    isVisible={show}
                    closeModal={refuseDeleteBookAction}
                    acceptDeleteAction={acceptDeleteBookAction}
                />
            </Row>

        </Col>
    )
}

export default Author;