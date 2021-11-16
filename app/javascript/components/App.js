import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from '../configureStore';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={("Home!")}/>
          <Route path="/hello" element={<Greeting/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App
