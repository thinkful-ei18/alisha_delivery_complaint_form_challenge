import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import TrackingNumber from './TrackingNumber';
import SelectIssue from './SelectIssue';
import Details from './Details';


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