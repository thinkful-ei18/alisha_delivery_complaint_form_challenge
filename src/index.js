import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComplaintForm from './components/ComplaintForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ComplaintForm />, document.getElementById('root'));
registerServiceWorker();
