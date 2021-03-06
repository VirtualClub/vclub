export const INITIALIZE = 'club/init/initialize';

export function initialize(serverState, user) {
  return {
    type: INITIALIZE,
    payload: { serverState, user },
  };
}

export default function hoReducer(reducer) {
  return (state, action) => {
    if (action.type === INITIALIZE) {
      const { user, serverState } = action.payload;
      serverState.auth.authenticated = true;
      serverState.auth.authenticating = false;
      serverState.auth.user = user;

      delete serverState.audioMedia;
      delete serverState.features;
      delete serverState.socket;

      return { ...state, ...serverState };
    }

    return reducer(state, action);
  };
}
