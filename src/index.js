import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoComponent from './Todo/TodoComponent';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<TodoComponent />, document.getElementById('root'));
registerServiceWorker();
