import initialState from 'vclub/redux/initialClubState';


export const AUTH = 'club/auth/auth';
export const LOG_OUT = 'club/auth/log-out';

export function auth(authData) {
  return {
    type: AUTH,
    payload: authData,
    meta: {
      sideEffect: ({ ioSocket }) => {
        ioSocket.emit('auth', authData);
      },
    },
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
    meta: {
      sideEffect: ({ ioSocket }) => {
        ioSocket.emit('logOut');
      },
    },
  };
}

export default function reducer(state, action) {
  if (action.type === AUTH) {
    return {
      ...state,
      authenticating: true,
    };
  }

  if (action.type === LOG_OUT) {
    return initialState.auth;
  }

  return state || initialState.auth;
}
