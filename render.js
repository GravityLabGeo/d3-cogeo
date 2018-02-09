import * as d3 from "d3";


const projection = d3.geoAlbers().scale(1000);
const path = d3.geoPath().projection(projection);
const priority = 2.5;
const width = 960;
const height = 500;

const svgContainer = d3.select("body").append("svg")
                        .attr("width", width)
                        .attr("height", height);


