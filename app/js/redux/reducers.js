import { SET_ACTIVE_SESSION } from './actions';

const DEFAULT_STATE = {
  activeSession: false,
};

const setActiveSession = (state, action) =>
  Object.assign({}, state, { activeSession: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_SESSION:
      return setActiveSession(state, action);
    default:
      return state;
  }
};

export default rootReducer;
