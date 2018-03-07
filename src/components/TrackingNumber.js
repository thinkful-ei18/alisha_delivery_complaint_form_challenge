import React, { Component } from 'react';

export default class TrackingNumber extends Component {

  render() {
    console.log('tracking number props: ', this.props);

    return(
      <div>
        <label htmlFor='trackingNumber'>Tracking number:</label><br />
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
