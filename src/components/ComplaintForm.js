import React, { Component } from 'react';

export default class ComplaintForm extends Component {

  render() {

    return(
      <div>
        <form>
          <fieldset>
            <legend>Report a problem with your delivery</legend><br />
            Tracking number:<br />
            <input
              component='TrackingNumber'
              label='Tracking number'
              name='Tracking number'
              id='trackingNumber'
              type='text'
            /><br /><br />

            What is your issue?<br />
            <select
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
            </select><br /><br />

            Give more details (optional)<br />
            <textarea
              component='Details'
              label='Give more details (optional)'
              name='details'
              id='Details'
              type='text'
            /><br /><br />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
