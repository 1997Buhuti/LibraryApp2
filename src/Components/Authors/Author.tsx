import React, {useState} from "react";
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Trash2, Edit} from 'react-feather';
import DeleteAuthorModal from "./DeleteAuthorModal";
type authorProps={
    author:IAuthor;
    number:number;
    handleDeleteAuthor:(id:string)=>void
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
const Author: React.FC<authorProps> = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeleteButton=()=>{
        setShow(true);
        //props.handleDeleteAuthor(props.author.id);
    }
    const openDeleteAuthorModal = () => {
        setShow(true);
    }
    const acceptDeleteAuthorAction = () => {
        props.handleDeleteAuthor(props.author.id);
        setShow(false);
    }
    const refuseDeleteAuthorAction = () => {
        setShow(false);
    }

    const handleEditButton=()=>{
        console.log('clicked')
    }
    return (
        <Col xs={12} className=" author-info pt-2 pb-2">
            <Row>
                <Col className="author-info-text">
                    {props.number}.{props.author.name}
                </Col>
                <Row className=" icons mx-0">
                    <Col className="pr-1" >
                        <OverlayTrigger
                            placement="bottom"
                            delay={{show: 250, hide: 400}}
                            overlay={showEditTip}
                        >
                        <Edit className="edit-button" onClick={()=> handleEditButton()}/>
                        </OverlayTrigger>
                    </Col>
                    <Col>
                        <OverlayTrigger
                            placement="bottom"
                            delay={{show: 250, hide: 400}}
                            overlay={showDeleteTip}
                        >
                        <Trash2 className=" delete-button pr-1" onClick={()=>handleDeleteButton()}/>
                        </OverlayTrigger>
                    </Col>
                </Row>
                <DeleteAuthorModal
                    authorToDelete={props.author.name}
                    isVisible={show}
                    closeModal={refuseDeleteAuthorAction}
                    acceptDeleteAction={acceptDeleteAuthorAction}
                />

            </Row>

        </Col>
    )
}

export default Author;