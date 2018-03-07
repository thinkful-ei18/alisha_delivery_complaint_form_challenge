import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import TrackingNumber from './TrackingNumber'

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

            What is your issue?<br />
            <Field
              component='SelectIssue'
              label='What is your issue?'
              name='issue'
              id='SelectIssue'
              type='select' >
                <option value='one'>My delivery hasn't arrived</option>
                <option value='two'>The wrong item was delivered</option>
                <option value='three'>Part of my order was missing</option>
                <option value='four'>Some of my order arrived damaged</option>
                <option value='five'>Other (give details below)</option>
            </Field><br /><br />

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