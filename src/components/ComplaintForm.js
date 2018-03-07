import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import TrackingNumber from './TrackingNumber';
import SelectIssue from './SelectIssue';
import Details from './Details';
import { required, nonEmpty, exactLength, numbersOnly } from './validators';



class ComplaintForm extends Component {

  onSubmit(values) {
    console.log(values);
  }

  render() {

    return(
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <fieldset>
            <legend>Report a problem with your delivery</legend>

            <Field 
              component={TrackingNumber}
              name='trackingNumber'
              validate={[ required, nonEmpty, exactLength, numbersOnly ]}
            />

            <Field
              component={SelectIssue}
              name='issue'
            />

            <Field
              component={Details}
              name='details'
            />
            <br />

            <button type="submit">Submit</button>
            
          </fieldset>
        </form>
    );
  }
}

export default reduxForm({
  form:'complaint'
})(ComplaintForm)