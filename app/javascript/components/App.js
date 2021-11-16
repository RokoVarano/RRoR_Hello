import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element="Home!" />
        <Route path="/hello" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
