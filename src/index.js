import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { DataProvider } from './context/dataContext';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<DataProvider>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</DataProvider>
  </React.StrictMode>
);
