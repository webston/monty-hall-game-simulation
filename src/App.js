import React, {useState} from 'react';
import Chart from "./components/Chart";
import TrialForm from "./components/TrialForm";
import {FormattedMessage} from 'react-intl';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
        marginTop: 30,
        marginBottom: 30,
        maxWidth: 1000,
        padding: '20px 20px 50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

const theme = createMuiTheme();

theme.typography.h1 = {
    fontSize: '1.2rem',
    fontWeight: 500,
    marginBottom: 20,
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

theme.typography.h3 = {
    fontSize: '1rem',
    fontWeight: 400,
    marginBottom: 40,
    [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
    },
};

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
                    defaultMessage={`Monty Hall Problem Simulation`}
                />
            </Typography>
            <Typography variant="h3">
                <FormattedMessage
                    id="page-intro"
                    defaultMessage={`Monty Hall Problem Simulation`}
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
