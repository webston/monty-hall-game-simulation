import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Form} from 'formik';
import {FormattedMessage} from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';

const trialFormSchema = Yup.object().shape({
    trials: Yup.number()
        .min(1, 'Enter a number between 1 and 9999')
        .max(9999, 'Enter a number between 1 and 9999')
        .required('Required')
});

const useStyles = makeStyles(theme => ({
    formButton: {
        marginTop: 8,
        marginLeft: 12
    }
}));


function TrialForm({handleClick}) {
    const classes = useStyles();

    return (
        <Formik
            initialValues={{trials: ''}}
            validationSchema={trialFormSchema}
            onSubmit={(values, actions) => {
                handleClick(values);
                actions.setSubmitting(false);
            }}>{({setFieldValue, errors, touched}) => (
            <Form>
                <TextField
                    error={
                        !!errors.trials
                    }
                    helperText={errors.trials}
                    id="standard-number"
                    name="trials"
                    label="Trials"
                    type="number"
                    variant="outlined"
                    onChange={e => setFieldValue('trials', e.target.value)}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <Button type="submit" variant="outlined" className={classes.formButton}>
                    <FormattedMessage
                        id="submit-btn"
                        defaultMessage={`Simulate`}
                    />
                </Button>
            </Form>
        )}
        </Formik>
  );
}

TrialForm.propTypes = {
    handleClick: PropTypes.func
};

export default TrialForm;
