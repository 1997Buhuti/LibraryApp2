import React, {FC} from "react";
import {Card} from "react-bootstrap";
import {Facebook, Instagram, Twitter} from "react-feather";

const Footer:FC=()=>{
    return(
        <Card className="Footer text-center">
            <Card.Header className="footer-header">React Based Industrial Training</Card.Header>
            <Card.Body className="footer-body" style={{backgroundColor:'#000d7d'}}>
                <Card.Title>SoftVessel</Card.Title>
                <Card.Text>
                    <p>No. 60, Cotta Rd, Colombo 08,</p>
                    <p>Sri Lanka.</p>
                    <span className='media-icons mt-1'>
                        <Facebook/> <Twitter/> <Instagram/>
                    </span>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted footer-bottom" style={{backgroundColor:'#00013b'}}>©DPB MANAKAL</Card.Footer>
        </Card>
    )
}
export default Footer;
