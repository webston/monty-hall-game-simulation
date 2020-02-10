import React, {useState} from 'react';
import Chart from "./components/Chart";
import TrialForm from "./components/TrialForm";

function App() {
    const [showChart, doShowChart] = useState(false);
    const [trials, updateTrials] = useState(0);

    const handleClick = ({trials}) => {
        doShowChart(true);
        updateTrials(trials);
    };

  return (
    <div className="App">
        <TrialForm handleClick={handleClick}/>
        {
            showChart && trials > 0 ? (
                <Chart trials={trials} />
            ) : null
        }
    </div>
  );
}

export default App;
