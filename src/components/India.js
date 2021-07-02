import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import StateInfo from './StateInfo';
import React, { Component } from 'react';
import Axios from 'axios';

class India extends Component {

    constructor() {
        super();
        this.state = {
            indiaData : {}
        }
    }

    componentDidMount() {
        Axios.get('https://corona.lmao.ninja/v2/countries/india').then(response=>{
            this.setState({indiaData:response.data});
        });
    };

    render() {
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
                                <Card.Title>TOTAL CASES</Card.Title>
                                <Card.Text>
                                    { this.state.indiaData.cases }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3 mb-3">
                        <Card className="bg-warning">
                            <Card.Body className="text-white text-center">
                                <Card.Title>ACTIVE CASES</Card.Title>
                                <Card.Text>
                                    { this.state.indiaData.active }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3 mb-3">
                        <Card className="bg-success">
                            <Card.Body className="text-white text-center">
                                <Card.Title>RECOVERED</Card.Title>
                                <Card.Text>
                                    { this.state.indiaData.recovered }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3 mb-3">
                        <Card className="bg-danger">
                            <Card.Body className="text-white text-center">
                                <Card.Title>DEATH</Card.Title>
                                <Card.Text>
                                    { this.state.indiaData.deaths }
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
}

export default India;