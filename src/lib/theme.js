import {createMuiTheme} from "@material-ui/core/styles";

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

export default theme;