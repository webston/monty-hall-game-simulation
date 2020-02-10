import React from 'react';
import { useFormik } from 'formik';
import {FormattedMessage} from 'react-intl';

function TrialForm({handleClick}) {
    const formik = useFormik({
        initialValues: {
            trials: '',
        },
        onSubmit: values => {
            handleClick(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="trials"
                name="trials"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.trials}
            />
            <button type="submit">
                <FormattedMessage
                    id="submit-btn"
                    defaultMessage={`Simulate`}
                />
            </button>
        </form>
  );
}

export default TrialForm;
