import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import ComplaintForm from './components/ComplaintForm';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ComplaintForm />
  </Provider>,
 document.getElementById('root'));
registerServiceWorker();
