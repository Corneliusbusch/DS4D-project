import React, {Component} from 'react';
import * as d3 from "d3";


class NetworkGraph extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {

        var svg = d3.select("#chart"),
            width = +svg.attr("width"),
            height = +svg.attr("height");

        var color = d3.scaleOrdinal().domain(["Category", "Internet"])
            .range(["#c3d400", "#Fb007F"]);;


        var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function(d) { return d.id; }))
            .force("charge", d3.forceManyBody().strength(-1000))
            .force("center", d3.forceCenter(width / 2, (height / 2)+50));

        function getOpacity(value){
            if (value < 50 ) return 0.2;
            else if (value < 75) return 0.4;
            else if (value < 100) return 0.5;
            else if (value < 125) return 0.6;
            else if (value < 175) return 0.7;
            else if (value < 250) return 0.9;
            else return 1;
        }

        d3.json("graph-basic.json", function(error, graph) {
            if (error) throw error;

            var link = svg.append("g")
                .attr("class", "links")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line")
                .attr("stroke-width", function(d){
                    return 10*getOpacity(d.value)
                })//function(d) { return Math.sqrt(d.value); })
                .style("stroke-opacity", function(d){
                    return getOpacity(d.value)
                });

            var node = svg.append("g")
                .attr("class", "nodes")
                .selectAll("g")
                .data(graph.nodes)
                .enter().append("g")

            function rscale(d){
                return d3.scaleLinear()
                    .domain([0, d3.max(d.traffic) ])
                    .range([2, 50]);
            }
            /*var rscale = d3.scaleLinear()
                .domain([0, d3.max(d.traffic) ])
                .range([2, 50]);*/

            var circles = node.append("circle")
                .attr("r", d => Math.sqrt(d.traffic))
                .attr("fill", function(d) { return color(d.group); })
                .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended));

            /*var labels = node.append("text")
                .text(function(d) {
                    return d.id;
                })
                .attr('x', 6)
                .attr('y', 3);*/

            node.append("title")
                .text(function(d) { return d.id; });

            simulation
                .nodes(graph.nodes)
                .on("tick", ticked);

            simulation.force("link")
                .links(graph.links);

            function ticked() {
                link
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                node
                    .attr("transform", function(d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    })
            }
        });

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
    }

    render(){
        return <svg id = "chart" width="1024" height="1000"></svg>
        //return <div>Hi, we are rendering</div>
    }



}

export default NetworkGraph;
