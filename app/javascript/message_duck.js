import axios from 'axios';

const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';

const getMessage = () => async (dispatch) => {
  axios.get('http://localhost:3000/api/v1/messages').then((response) => {
    const { data } = response;

    dispatch(
      {
        type: GET_MESSAGES_REQUEST,
        content: data.data.attributes.content,
      },
    );
  });
};

const messages = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
      return action.content;
    default:
      return state;
  }
};

export default messages;
export { getMessage };
