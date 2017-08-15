import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';

document.getElementById('root').innerHTML = 'Hi, I am ready';

render(
	<App />,
	document.getElementById('root')
);