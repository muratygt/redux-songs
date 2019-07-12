import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers/index';

const provider = (
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>
);
ReactDOM.render(provider, document.getElementById('root'));
