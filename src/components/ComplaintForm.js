import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

import TrackingNumber from './TrackingNumber';
import SelectIssue from './SelectIssue';
import Details from './Details';
import { required, nonEmpty, exactLength, numbersOnly } from './validators';



class ComplaintForm extends Component {

  onSubmit(values) {
    console.log(values);
    return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log('RES: ', res)
        if (!res.ok) {
          if (
            res.headers.has('content-type') &&
            res.headers
              .get('content-type')
              .startsWith('application/json')
          ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
          }
          // It's a less informative error returned by express
          return Promise.reject({
            code: res.status,
            message: res.statusText
          });
        }
        return;
      })
      .then(() => console.log('Submitted with values', values))
      .catch(err => {
        console.log('ERR: ', err);
        const { reason, message, location } = err;
        if (reason === 'ValidationError') {
          // Convert ValidationErrors into SubmissionErrors for Redux Form
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
        return Promise.reject(
          new SubmissionError({
            _error: 'Error submitting message'
          })
        );
      });
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