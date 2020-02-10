import React from 'react';
import { useFormik } from 'formik';

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
            <button type="submit">Submit</button>
        </form>
  );
}

export default TrialForm;
