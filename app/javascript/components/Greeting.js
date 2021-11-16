import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../message_duck';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, []);

  const messages = useSelector(state => state.messages)

    return (
      <React.Fragment>
        Greeting: {messages}

      </React.Fragment>
    );
  
}

Greeting.propTypes = {
  content: PropTypes.string
};

export default Greeting;
