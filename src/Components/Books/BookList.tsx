import {Col, Row} from "react-bootstrap";
import Book from "./Book";

const AuthorList:React.FC = () => {

    return (
        <Row className="mx-0" style={{border: '1px solid aqua '}}>
            <Col className="px-0" xs={12} style={{border: '1px solid blue '}}>
                <Book/>
            </Col>
        </Row>
    );
}
export default AuthorList;