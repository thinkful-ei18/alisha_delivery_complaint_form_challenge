import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

export default class ComplaintForm extends Component {

  render() {

    return(
      <div>
        <h1>Report a problem with your delivery</h1>
        <form>
          <Field
            component=''
            label=''
            element=''
            name=''
            id=''
            type=''
          />
          <Field
            component=''
            label=''
            element=''
            name=''
            id=''
            type=''
          />
          <Field
            component=''
            label=''
            element=''
            name=''
            id=''
            type=''
          />
        </form>
      </div>
    );
  }
}

reduxForm({
  form:'complaint'
})(ComplaintForm)