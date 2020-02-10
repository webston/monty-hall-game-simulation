import React from 'react';
import { LineChart, Label, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import simulateMontyHall from '../lib/montyHall';

function Chart({trials}) {
    let chartData = [
        { //Initial values
            trials: 0,
            wins: {
                switched: 0,
                stayed: 0
            }
        },
        { //Simulate monty hall problem
            trials: trials,
            wins: {
                switched: simulateMontyHall(true, trials),
                stayed: simulateMontyHall(false, trials)
            }
        }];

    return (
    <div className="chart">
        <LineChart width={600} height={300} data={chartData} margin={{top: 15, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey='trials' type='number' angle={-45} label={{ value: 'pv of page', position: 'insideLeft' }}/>
            <YAxis type='number'/>
            <Line type="monotone" dataKey={cData => cData.wins.switched} stroke="#5ecc7b" name="Switched" />
            <Line type="monotone" dataKey={cData => cData.wins.stayed} stroke="#8884d8" name="Stayed" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Legend verticalAlign="top" height={36}/>
        </LineChart>
    </div>
  );
}

export default Chart;
