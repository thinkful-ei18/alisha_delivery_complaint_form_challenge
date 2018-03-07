import React, { Component } from 'react';

export default class SelectIssue extends Component {

  render(){

    return (
      <div>
        <label htmlFor='issue'>What is your issue?</label><br />
        <select
          {...this.props.input}
          id='issue'
          type='select' >
          <option value='one'>My delivery hasn't arrived</option>
          <option value='two'>The wrong item was delivered</option>
          <option value='three'>Part of my order was missing</option>
          <option value='four'>Some of my order arrived damaged</option>
          <option value='five'>Other (give details below)</option>
        </select>
      </div>
    );
  }
}
