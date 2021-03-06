import React, { Component } from 'react';

import '../styles/complaintForm.css';


export default class TrackingNumber extends Component {

  render() {

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <span className='errorMessage'>{this.props.meta.error}</span>;
    }

    return(
      <div className='form trackingNumber'>
        <label htmlFor='trackingNumber'>Tracking number:{error}</label><br />
        <input
          {...this.props.input}
          id='trackingNumber'
          placeholder='Tracking Number'
          type='text'
        />
      </div>
    );
  }
}
