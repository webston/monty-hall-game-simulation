import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Text, ResponsiveContainer } from 'recharts';
import simulateMontyHall from '../lib/montyHall';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    chartWrapper: {
        marginTop: 30,
        width: '100%',
        maxWidth: 800,
        height: 300,
    },
}));

function Chart({trials}) {
    const classes = useStyles();

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
    <div className={classes.chartWrapper}>
        <ResponsiveContainer>
            <LineChart data={chartData} margin={{top: 15, right: 5, left: 5, bottom: 10 }}>
                <XAxis dataKey='trials' type='number' label={{ value: 'Number of trials', position: 'insideBottom', offset: -10 }}/>
                <YAxis type='number' label={<Text
                    x={0}
                    y={0}
                    dx={10}
                    dy={200}
                    offset={0}
                    angle={-90}
                >Number of wins</Text>}/>
                <Line type="monotone" dataKey={cData => cData.wins.switched} stroke="#5ecc7b" name="Switched" />
                <Line type="monotone" dataKey={cData => cData.wins.stayed} stroke="#8884d8" name="Stayed" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Legend verticalAlign="top" height={36}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
}


export default Chart;
