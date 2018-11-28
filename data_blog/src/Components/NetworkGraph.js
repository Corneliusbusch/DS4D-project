import React, {Component} from 'react';
import * as d3 from "d3";


class NetworkGraph extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const graph = this.props.graph;
        const links = graph["links"];
        const nodes = graph["nodes"];

        //console.log(Object.keys(graph).length);
        console.log(graph);
        //console.log(links);
        //console.log(nodes);


        const simulation = forceSimulation(nodes, links).on("tick", ticked);

        const svg = d3.select("div").append("svg")
            .attr("width", this.props.width)
            .attr("height", this.props.height);

        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke-width", d => getOpacityFromTimeDiff(d.value));

        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("r", 5)
            .attr("fill", "red")
            .call(this.drag(simulation));

        node.append("title")
            .text(d => d.id);


        function ticked() {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);
        }

        function getOpacityFromTimeDiff(timeDiff){
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

        return svg.node()
    }

    render(){
        return <div id={"#" + this.props.id}>{this.drawChart()}</div>
        //return <div>Hi, we are rendering</div>
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

}

export default NetworkGraph;

function forceSimulation(nodes, links) {
    return d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter());
}



// var color = {
//     const scale = d3.scaleOrdinal(d3.schemeCategory10);
//     return d => scale(d.group);
//}