import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../message_duck';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, []);

  const messages = useSelector((state) => state.messages);

  return (
    <>
      Greeting:
      {messages}

    </>
  );
};

export default Greeting;
