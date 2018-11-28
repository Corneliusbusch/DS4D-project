import React, { Component } from 'react'
import NetworkGraph from "./NetworkGraph";
//import NetworkGraphd3 from "./NetworkGraphd3";
import NetworkGraphv2 from "./NetworkGraphv2";
const axios = require('axios');

class GraphDiv extends Component {


    state = {
        graph: {},
        width: 1024,
        height: 1000,
        id: 'root'
    }

    componentWillMount() {
        axios.get('./graph.json') // JSON File Path
            .then( response => {
                this.setState({
                    graph: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="GraphDiv">
                <h1> Hello World </h1>
                { this.state && (Object.keys(this.state.graph).length > 0) &&
                <div>
                    <div>This renders only after the data arrived</div>
                    <NetworkGraph graph={this.state.graph} width={this.state.width} height={this.state.height} />
                </div>
                }
            </div>
        );
    }
}
export default GraphDiv