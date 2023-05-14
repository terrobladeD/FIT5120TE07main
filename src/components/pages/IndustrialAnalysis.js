import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register all chart controllers

const IndustrialAnalysis = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const chartData1 = {
      labels: ['Nov-11', 'Nov-12', 'Nov-13', 'Nov-14', 'Nov-15', 'Nov-16', 'Nov-17', 'Nov-18', 'Nov-19', 'Nov-20', 'Nov-21', 'Projected Employment level November 2026', 'Projected Employment Growth 5 years to November 2026'],
      datasets: [
        {
          label: 'Chief Executives and Managing Directors',
          data: [66200, 69100, 61600, 46900, 64000, 51700, 47400, 63000, 31600, 37700, 42300, 44200, 1900, 4.6],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        },
      ],
    };

    const chartData2 = {
      labels: ['Nov-11', 'Nov-12', 'Nov-13', 'Nov-14', 'Nov-15', 'Nov-16', 'Nov-17', 'Nov-18', 'Nov-19', 'Nov-20', 'Nov-21', 'Projected Employment level November 2026', 'Projected Employment Growth 5 years to November 2026'],
      datasets: [
        {
          label: 'Other Occupation',
          data: [10000, 20000, 15000, 25000, 5000, 22000, 18000, 27000, 19000, 30000, 40000, 42000, 2400, 5.6],
          borderColor: 'rgba(192, 75, 192, 1)',
          borderWidth: 1,
          fill: false
        },
      ],
    };

    if (chart) {
      chart.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: selectedOption === 'option1' ? chartData1 : chartData2,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });

    setChart(newChart);

    // Clean up the chart when the component unmounts
    return () => {
      newChart.destroy();
    };
  }, [selectedOption, chart]);

  return (
    <Container>
      <Row>
        <Col>
          <p>This is the IndustrialAnalysis</p>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="option1">Chief Executives and Managing Directors</option>
            <option value="option2">Other Occupation</option>
          </select>
          <canvas ref={chartRef} />
        </Col>
      </Row>
    </Container>
  );
};

export default IndustrialAnalysis
