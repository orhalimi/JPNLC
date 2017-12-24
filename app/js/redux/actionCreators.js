import { SET_ACTIVE_SESSION } from './actions';

export function setActiveSession(activeSession) {
  return { type: SET_ACTIVE_SESSION, payload: activeSession };
}
