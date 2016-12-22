import { reducer as formReducer } from 'redux-form';
import composeReducers from 'borex-reducers/utils/composeReducers';
import scopeReducer from 'borex-reducers/utils/scopeReducer';

import initHOReducer from './club/init';

import authReducer from './club/auth';
import membersReducer from './club/members';
import roomsReducer from './club/rooms';
import uiReducer from './club/ui';
import sharingRoomReducer from './club/sharing';
import whiteboardReducer from './club/whiteboard';

import mediaReducer from './club/media';
import rtcReducer from './club/rtc';

const baseReducer = composeReducers(
  scopeReducer('auth', authReducer),
  scopeReducer('members', membersReducer),
  scopeReducer('rooms', roomsReducer),
  scopeReducer('ui', uiReducer),
  scopeReducer('form', formReducer),
  scopeReducer('sharingRoom', sharingRoomReducer),
  scopeReducer('media', mediaReducer),
  scopeReducer('rtc', rtcReducer),
  scopeReducer('whiteboard', whiteboardReducer),
);

export default initHOReducer(baseReducer);
