import { START_FETCHING_TASKS, RECEIVED_TASKS } from '../actions/taskList';

const initialState = {
  isFetching: false,
  lastFetched: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_TASKS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVED_TASKS:
      return {
        ...state,
        isFetching: false,
        lastFetched: action.receivedAt
      };

    default:
      return state;
  }
};
