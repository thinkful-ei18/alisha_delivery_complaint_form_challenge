import React, { Component } from 'react';

import '../styles/complaintForm.css';


export default class SelectIssue extends Component {

  render(){

    return (
      <div className='form issue'>
        <label htmlFor='issue'>What is your issue?</label><br />
        <select
          {...this.props.input}
          id='issue'
          type='select' >
          <option value='not-delivered'>My delivery hasn't arrived</option>
          <option value='wrong-item'>The wrong item was delivered</option>
          <option value='missing-part'>Part of my order was missing</option>
          <option value='damaged'>Some of my order arrived damaged</option>
          <option value='other'>Other (give details below)</option>
        </select>
      </div>
    );
  }
}
