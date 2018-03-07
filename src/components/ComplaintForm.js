import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import TrackingNumber from './TrackingNumber'
import SelectIssue from './SelectIssue'


class ComplaintForm extends Component {

  render() {

    return(
        <form>
          <fieldset>
            <legend>Report a problem with your delivery</legend>
            <Field 
              component={TrackingNumber}
              name='trackingNumber' 
            />

            <Field
              component={SelectIssue}
              name='selectIssue'
            />

            Give more details (optional)<br />
            <Field
              component='Details'
              label='Give more details (optional)'
              name='details'
              id='Details'
              type='textarea'
            /><br /><br />

            <button type="submit">Submit</button>
          </fieldset>
        </form>
    );
  }
}

export default reduxForm({
  form:'complaint'
})(ComplaintForm)