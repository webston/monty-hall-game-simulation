import React, {useState} from 'react';
import Chart from "./components/Chart";
import TrialForm from "./components/TrialForm";
import {FormattedMessage} from 'react-intl';

function App() {
    const [showChart, doShowChart] = useState(false);
    const [trials, updateTrials] = useState(0);

    const handleClick = ({trials}) => {
        doShowChart(true);
        updateTrials(trials);
    };

  return (
    <div className="App">
        <h1>
            <FormattedMessage
                id="page-heading"
                defaultMessage={`Monty Hall Problem Simulation`}
            />
        </h1>
        <TrialForm handleClick={handleClick}/>
        <Chart trials={trials} />
    </div>
  );
}

export default App;
