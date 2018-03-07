import React from 'react';

export default function SelectIssue() {

  return (
    <div>
      <p>What is your issue?</p>
      <select
        label='What is your issue?'
        element='selectIssue'
        id='selectIssue'
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
