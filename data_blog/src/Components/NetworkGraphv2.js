import React, {Component} from 'react';
import * as d3 from "d3";
import './NetworkGraph.css';

class NetworkGraphv2 extends Component {
    scale;

    drawChart() {
        const graph = this.props.graph;
        const links = graph["links"];
        const nodes = graph["nodes"];

        //console.log(Object.keys(graph).length);
        //console.log(graph);
        console.log(links[0]);
        console.log(links[10]);

        console.log(nodes);

        /*const color = {
            this.scale = d3.scaleOrdinal(d3.schemeCategory10);
            return d => scale(d.type);
        }*/


        const simulation = this.forceSimulation(nodes, links).on("tick", ticked);

        const svg = d3.select(this._rootNode).append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height);

        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke-width", d => this.getOpacityFromTimeDiff(d.time));

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("r", 0.5)
            .attr("fill", "red")
            .call(this.drag(simulation));

        node.append("title")
            .text(d => d.label);


        function ticked() {
            link
                .attr("x1", d => d.startNode.x)
                .attr("y1", d => d.startNode.y)
                .attr("x2", d => d.endNode.x)
                .attr("y2", d => d.endNode.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        }

        return svg.node()
    }

    componentDidMount() {
        this.drawChart();
    }


    getOpacityFromTimeDiff(timeDiff){
        if (timeDiff > 24*60*60) return 0.0;
        else if (timeDiff > 3*60*60) return 0.1;
        else if (timeDiff > 2*60*60) return 0.2;
        else if (timeDiff > 60*60) return 0.4;
        else if (timeDiff > 30*60) return 0.5;
        else if (timeDiff > 10 * 60) return 0.6;
        else if (timeDiff > 5*60) return 0.7;
        else if (timeDiff > 60) return 0.9;
        else return 1;
    }

    forceSimulation(nodes, links) {
        return d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter());
    }



    drag = simulation => {

        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    shouldComponentUpdate() {
        // Prevents component re-rendering
        return false;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        return <div className="graph-container border" ref={this._setRef.bind(this)}></div>
    }
}

export default NetworkGraphv2;