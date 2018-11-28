import React, {Component} from 'react';
import { Graph } from 'react-d3-graph';


class NetworkGraphd3 extends Component {


    drawChart() {
        const graph = this.props.graph;

        //console.log(Object.keys(graph).length);
        console.log(graph);
        //console.log(links);
        //console.log(nodes);

        const myConfig = {
            nodeHighlightBehavior: true,
            node: {
                color: 'lightgreen',
                size: 120,
                highlightStrokeColor: 'blue'
            },
            link: {
                highlightColor: 'lightblue'
            }
        };

        // graph event callbacks
        const onClickGraph = function () {
            window.alert(`Clicked the graph background`);
        };

        const onClickNode = function (nodeId) {
            window.alert(`Clicked node ${nodeId}`);
        };

        const onRightClickNode = function (event, nodeId) {
            window.alert(`Right clicked node ${nodeId}`);
        };

        const onMouseOverNode = function (nodeId) {
            window.alert(`Mouse over node ${nodeId}`);
        };

        const onMouseOutNode = function (nodeId) {
            window.alert(`Mouse out node ${nodeId}`);
        };

        const onClickLink = function (source, target) {
            window.alert(`Clicked link between ${source} and ${target}`);
        };

        const onRightClickLink = function (event, source, target) {
            window.alert(`Right clicked link between ${source} and ${target}`);
        };

        const onMouseOverLink = function (source, target) {
            window.alert(`Mouse over in link between ${source} and ${target}`);
        };

        const onMouseOutLink = function (source, target) {
            window.alert(`Mouse out link between ${source} and ${target}`);
        };

        return <Graph
            id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
            data={graph}
            config={myConfig}
            onClickNode={onClickNode}
            onRightClickNode={onRightClickNode}
            onClickGraph={onClickGraph}
            onClickLink={onClickLink}
            onRightClickLink={onRightClickLink}
            onMouseOverNode={onMouseOverNode}
            onMouseOutNode={onMouseOutNode}
            onMouseOverLink={onMouseOverLink}
            onMouseOutLink={onMouseOutLink}
        />;

    }


    render() {
        return <div id={"#" + this.props.id}>{this.drawChart()}</div>
        //return <div>Hi, we are rendering</div>
    }
}

export default NetworkGraphd3;



// var color = {
//     const scale = d3.scaleOrdinal(d3.schemeCategory10);
//     return d => scale(d.group);
//}