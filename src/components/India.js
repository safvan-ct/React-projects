import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import StateInfo from './StateInfo';

function India() {
    return ( 
        <div className="container">
            <div className=" row mt-3">
                <div className="col-md-12 mb-3">
                    <img src="https://www.countryflags.io/in/shiny/64.png" alt="India"/>
                    <h3>INDIA</h3>
                </div>

                <div className="col-md-3 mb-3">
                    <Card className="bg-primary">
                        <Card.Body className="text-white text-center">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-3 mb-3">
                    <Card className="bg-warning">
                        <Card.Body className="text-white text-center">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-3 mb-3">
                    <Card className="bg-success">
                        <Card.Body className="text-white text-center">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-3 mb-3">
                    <Card className="bg-danger">
                        <Card.Body className="text-white text-center">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-12 mb-3">
                    <StateInfo/>
                </div>
            </div>
        </div>
    );
}

export default India;