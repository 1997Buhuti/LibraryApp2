import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import WelcomeScreen from "./WelcomeScreen";
import Authors from "./Authors/Authors";
import Books from "./Books/Books";

const Library=()=> {
    const [AllAuthorList, setAllAuthorList] = useState<IAuthor[]>([]);
    // Get all available authors from the authors section
    const getAllAuthors = (authors: IAuthor[]) => {
        setAllAuthorList(authors);
    }
    // Send all available authors into books section
    const sendAllAuthors = (): IAuthor[] => {
        return AllAuthorList;
    }
    return(
        <Container fluid={true} className="Library-Container px-0">
            <Row className="Library mx-0">
                <Col className="px-0">
                    <WelcomeScreen/>
                </Col>
            </Row>
            <Row className=" mx-0 mb-5 pb-5">
                <Col  md={{order: 'first', span: 6}} xs={{order: 'last', span: 12}}>
                    <Books authorsAvailable={sendAllAuthors}/>
                </Col>
                <Col className="" md={6} xs={12}>
                    <Authors returnAllAuthors={getAllAuthors}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;