import React from 'react';
import { LineChart, Label, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';

function Chart({trials}) {
    let chartData = [
        {
            trials: 0,
            wins: {
                switched: 0,
                stayed: 0
            }
        },
        {
            trials: trials,
            wins: {
                switched: 60,
                stayed: 30
            }
        }];

    return (
    <div className="chart">
        <LineChart width={600} height={300} data={chartData} margin={{top: 15, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey='trials' type='number'/>
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
