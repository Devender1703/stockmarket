import './App.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import {Line} from 'react-chartjs-2';
import React from 'react';
import {Niftyage, NiftyTracker, PresentDate} from './data.svc';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export class Grid extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {graph : this.changeState(5)};
    this.handleClick = this.handleClick.bind(this);
  }

  changeState(numYears) {
    let state = {
      labels : [],
      datasets: [
        {
          label: 'Nifty',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data : []
        }
      ]
    }
    let start = Niftyage - numYears + 1;
    let startYear = PresentDate.getUTCFullYear() - numYears + 1;
    for(let i = start; i <= Niftyage; i++)
    {
      state.labels.push(startYear.toString());
      state.datasets[0].data.push(NiftyTracker[i]);
      startYear += 1;
    }

    return state
  }

  handleClick(numYears) {
    this.setState({graph : this.changeState(numYears)});
  }

  options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    }
  };

  render() {
    return (
      <div className="chart">
        <div className="CustomYears">
          <button className="year" onClick={() => {this.handleClick(3)}}>3yrs</button>
          <button className="year" onClick={() => {this.handleClick(5)}}>5yrs</button>
          <button className="year" onClick={() => {this.handleClick(7)}}>7yrs</button>
          <button className="year" onClick={() => {this.handleClick(9)}}>9yrs</button>
          <button className="year" onClick={() => {this.handleClick(Niftyage)}}>ALL</button>
        </div>
        <Line options = {this.options} data={this.state.graph}/>
      </div>
    );
  } 
}