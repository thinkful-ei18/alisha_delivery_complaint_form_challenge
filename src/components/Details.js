import React from 'react';

export default function Details() {

  return (
    <div>
      <p>Give more details (optional)</p>
      <textarea
        label='Give more details (optional)'
        element='details'
        id='details'
        type='textarea'
      />
    </div>
  );
}
