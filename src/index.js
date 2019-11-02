import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from "./components/bookstore-service-context";

import store from './store';

const booksroteService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={booksroteService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
, document.getElementById('root'));
