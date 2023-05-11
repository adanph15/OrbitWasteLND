import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import jasonimg from "../../assets/img/jasonimg";
import "./Map.css";


const BarChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);

    // Configuración del gráfico
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;
    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);
    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Configuración de los datos
    x.domain(data.map(d => d.label));
    y.domain([0, d3.max(data, d => d.value)]);

    // Dibujar barras
    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.label))
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value));

    // Dibujar eje X
    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Dibujar eje Y
    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(5));
  }, [data]);

  return (
    <svg ref={ref} width="500" height="300">
      {/* No es necesario agregar elementos aquí */}
    </svg>
  );
};

export default BarChart;
