import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Axios from 'axios';
import { Accordion, Card, Button } from 'react-bootstrap';

class StateInfo extends Component {

    constructor() {
        super();
        this.state = {
            stateData : {}
        }
    }

    componentDidMount() {
        Axios.get('https://api.covid19india.org/state_district_wise.json').then(response=>{
            this.setState({stateData:response.data});
        });
    };

    render() {

        let keys = Object.keys(this.state.stateData);

        return ( 
            <div className="container">
                <div className=" row mt-3">
                    <div className="col-md-12 mb-3">
                        <h5>State Data</h5>
                    </div>

                    <div className="col-md-12 mb-3">
                        <Accordion>
                            { keys.map((value, key)=>{
                                let districts = this.state.stateData[value].districtData;
                                //let districts_keys = Object.keys(districts);

                                let total_active = 0;
                                let total_confirm = 0;
                                let total_death = 0;
                                let total_recover = 0;

                                let district_list = [];
                                for(var i in districts) {
                                    total_active += districts[i].active;
                                    total_confirm += districts[i].confirmed;
                                    total_death += districts[i].deceased;
                                    total_recover += districts[i].recovered;

                                    let obj = districts[i];
                                    obj['district_name'] = i;
                                    district_list.push(obj);
                                }

                                let count = key+1;

                                return (
                                    <Card  key={key}>
                                        <Accordion.Toggle as={Button} variant="link" className="bg-info mb-3" eventKey={key}>
                                            <Card.Header className="text-white">
                                                <span className="float-left mb-2">{count} - {value}</span>
                                                <span className="float-right">
                                                    <span className="btn btn-warning mr-1 d-md-inline d-block mb-2"> 
                                                        Total Cases { total_confirm }
                                                    </span>
                                                    <span className="btn btn-primary mr-1 d-md-inline d-block mb-2"> 
                                                        Active Cases { total_active }
                                                    </span>
                                                    <span className="btn btn-success mr-1 d-md-inline d-block mb-2"> 
                                                        Recovered { total_recover }
                                                    </span>
                                                    <span className="btn btn-danger mr-1 d-md-inline d-block mb-2"> 
                                                        Total Death { total_death }
                                                    </span>
                                                </span>
                                            </Card.Header>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey={key}>
                                            <Card.Body>
                                                <div className="table-responsive">
                                                    <table className="table-striped table">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>District</th>
                                                                <th>Confirmed</th>
                                                                <th>Active</th>
                                                                <th>Recovered</th>
                                                                <th>Deaths</th>
                                                            </tr>
                                                        </thead>

                                                        <thead>
                                                            { district_list.map((v, k)=>{
                                                                return(
                                                                    <tr key={k}>
                                                                        <td>{ ++k }</td>
                                                                        <td>{ v.district_name }</td>
                                                                        <td>{ v.confirmed }</td>
                                                                        <td>{ v.active }</td>
                                                                        <td>{ v.recovered }</td>
                                                                        <td>{ v.deceased }</td>
                                                                    </tr>
                                                                )
                                                            }) }
                                                        </thead>
                                                    </table>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                );
                            }) }
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default StateInfo;