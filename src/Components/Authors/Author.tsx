import React from "react";
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {Trash2, Edit} from 'react-feather';
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

    const handleDeleteButton=()=>{
        console.log(props.author.id);
        props.handleDeleteAuthor(props.author.id);
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

            </Row>

        </Col>
    )
}

export default Author;