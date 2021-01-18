import React from 'react';
import ReactDOM from 'react-dom'

const $root = document.getElementById('root');

const element = React.createElement('h1', null, `Hello World!`);

ReactDOM.render(element, $root);
