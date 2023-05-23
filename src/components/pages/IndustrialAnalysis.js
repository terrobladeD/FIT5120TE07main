import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, ListGroup, FormControl } from 'react-bootstrap';
import Banner from '../global/Banner';
import { Chart, registerables } from 'chart.js';
import { industrialanalysis } from '../../assets/img';
// import 'chartjs-plugin-datasource';

Chart.register(...registerables);

const randomFacts = [
  "Did you know? The automation of industries could disrupt 400 to 800 million jobs by 2030.",
  "Automation and AI will lift productivity and economic growth, but millions of people worldwide may need to switch occupations.",
  "New jobs will be available, in areas like development and deployment of new technologies.",
  "By 2030, around 8.5% to 9% of labor demand will be in jobs that did not exist before.",
  "AI could affect men and women disproportionately. Women could be more affected by automation, while men are more likely to feel the effects of AI."
]

const IndustrialAnalysis = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [chart, setChart] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const chartRef = useRef(null);

  const fetchData = async () => {
    const response = await fetch('https://airevolution.works/api/jobgrowth');
    const fetchedData = await response.json();
    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOptionChange = (occupation) => {
    setSelectedOption(occupation);
    setSearchTerm(occupation);
    setSearchResults([]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      const results = data
        .filter((item) =>
          item[0].toLowerCase().includes(event.target.value.toLowerCase())
        )
        .slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const selectedData = data.find((item) => item[0] === selectedOption);
  
    if (!selectedData) {
      return;
    }
  
    const chartData = {
      labels: [
        'Nov-11',
        'Nov-12',
        'Nov-13',
        'Nov-14',
        'Nov-15',
        'Nov-16',
        'Nov-17',
        'Nov-18',
        'Nov-19',
        'Nov-20',
        'Nov-21',
        'Projected(2026)', // Added label for the future point
      ],
      datasets: [
        {
          label: selectedData[0],
          data: [...selectedData.slice(1, 11), selectedData[11]], // Include the values in the data array
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false,
        },
        {
          label: `Projected Growth (${selectedData[14]}%)`, // Label for the dotted line
          data: Array(10).fill(null).concat(selectedData[11], selectedData[12]), // Create an array with null values, the selectedData[11] value, and the selectedData[12] value
          borderColor: 'rgba(255, 0, 0, 1)', // Transparent color for the dotted line
          borderWidth: 1,
          borderDash: [5, 5], // Make the line dashed
          fill: false,
        },
      ],
    };
  
    if (chart) {
      chart.destroy();
    }
  
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Year',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Number of Jobs',
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
            intersect: false,
            mode: 'point',
          },
        },
        interaction: {
          mode: 'chartData',
          axis : 'y'
        },
        backgroundColor: 'white',
      },
    });
  
    setChart(newChart);
  
    return () => {
      newChart.destroy();
    };
  }, [selectedOption, data, chart]);
  

  const selectedData = data.find((item) => item[0] === selectedOption);

  return (
    <Banner
      pageTitle="Industrial Analysis"
      smTitle="Explore the Future of Your Profession"
      breadcrumb="Industrial Analysis"
      aBackgroundImage={industrialanalysis}
      randomFacts={randomFacts}
      bannerColor="orange"
    >
      <Container>
        <Row>
          <Col>
            <FormControl
              type="text"
              placeholder="Search occupation..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchResults.length > 0 && (
              <div style={{ position: 'relative' }}>
                <ListGroup
                  style={{
                    position: 'absolute',
                    zIndex: 1000,
                    maxHeight: '200px',
                    overflowY: 'scroll',
                    width: '100%',
                  }}
                >
                  {searchResults.map((result) => (
                    <ListGroup.Item
                      key={result[0]}
                      onClick={() => handleOptionChange(result[0])}
                      style={{ cursor: 'pointer' }}
                    >
                      {result[0]}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            )}
            {selectedData && (
              <div style={{ backgroundColor: 'white', marginTop:'20px'}}>
                <p>
                  For {selectedData[0]} the projected growth in number of jobs  in the next five year in Australia is {selectedData[14]}% and it has {selectedData[13]}  market growth in coming years
                </p>
                <canvas ref={chartRef}  />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Banner>
  );
};

export default IndustrialAnalysis;

