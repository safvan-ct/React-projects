import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Axios from 'axios';

class World extends Component {
    
    constructor() {
        super();
        this.state = {
            data : [],
        }
    }

    componentDidMount() {
        Axios.get('https://corona.lmao.ninja/v2/countries').then(response=>{
            this.setState({data:response.data});
        });
    };

    render() {
        return ( 
            <div className="container">
                <div className=" row mt-3">
                    <div className="col-md-12 mb-3">
                        <h5>World Data</h5>
                    </div>

                    <div className="col-md-12 mb-3">
                        <table className="table-striped table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Country</th>
                                    <th>Total Cases</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>

                            <thead>
                                { this.state.data.map((value, key)=>{
                                    return(
                                        <tr key={key}>
                                            <td>{ ++key }</td>
                                            <td>
                                                <img src={value.countryInfo.flag} alt={ value.country } style={{ width: "30px" }} className="mr-3"/>
                                                { value.country }
                                            </td>
                                            <td>{ value.cases }</td>
                                            <td>{ value.recovered }</td>
                                            <td>{ value.deaths }</td>
                                        </tr>
                                    )
                                }) }
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default World;