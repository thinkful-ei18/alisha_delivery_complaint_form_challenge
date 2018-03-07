import React, { Component } from 'react';

export default class Details extends Component {

  render() {

    return (
      <div>
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
