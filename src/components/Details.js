import React, { Component } from 'react';

import '../styles/complaintForm.css';


export default class Details extends Component {

  render() {

    return (
      <div className='form details'>
        <label htmlFor='details'>Give more details (optional)</label><br />
        <textarea
          {...this.props.input}
          id='details'
          type='textarea'
        />
      </div>
    );
  }
}
