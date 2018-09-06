import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoComponent from './TodoComponent';
import registerServiceWorker from './registerServiceWorker';


var myCheese = {name: 'Gorgonzola', smellFactor: 'Extreme pong', price: 3.50 };

ReactDOM.render(<TodoComponent cheese={myCheese} />, document.getElementById('root'));
registerServiceWorker();
