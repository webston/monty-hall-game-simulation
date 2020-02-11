import React, {useState} from 'react';
import Chart from "./components/Chart";
import TrialForm from "./components/TrialForm";
import {FormattedMessage} from 'react-intl';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import theme from './lib/theme';

const useStyles = makeStyles(theme => ({
    appWrapper: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    paper: {

        maxWidth: 1000,
        padding: '20px 20px 50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

function App() {
    const classes = useStyles();
    const [trials, updateTrials] = useState(0);

    const handleClick = ({trials}) => {
        updateTrials(trials);
    };

  return (
    <div className={classes.appWrapper}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper className={classes.paper} elevation={3}>
            <Typography variant="h1">
                <FormattedMessage
                    id="page-heading"
                    defaultMessage={`Monty Hall Game Simulation`}
                />
            </Typography>
            <Typography variant="h3">
                <FormattedMessage
                    id="page-intro"
                    defaultMessage={`Use the form to run a simulation of the Monty Hall game and see if it's better to switch or stick to your selected box in the chart below.`}
                />
            </Typography>
            <TrialForm handleClick={handleClick}/>
            <Chart trials={trials} />
        </Paper>
        </ThemeProvider>
    </div>
  );
}

export default App;
