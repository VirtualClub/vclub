import React, { PropTypes } from 'react';

import {
  ChatRoomType, WhiteboardRoomType, SharingRoomType, MediaRoomType,
} from 'vclub/constants/roomTypes';

import AudioStreams from 'vclub/views/audioStreams/AudioStreams';
import Header from 'vclub/views/header/Header';
import Dialog from 'vclub/views/dialog/Dialog';

// rooms
import ChatRoom from 'vclub/views/chatRoom/ChatRoom';
import SharingRoom from 'vclub/views/sharingRoom/SharingRoom';
import WhiteBoardRoom from 'vclub/views/whiteBoardRoom/WhiteBoardRoom';
import StreamRoom from 'vclub/views/streamRoom/StreamRoom';

import style from './AuthedLayout.css';

const room = (currentRoom) => {
  switch (currentRoom) {
    case ChatRoomType:
      return <ChatRoom />;
    case SharingRoomType:
      return <SharingRoom />;
    case MediaRoomType:
      return <StreamRoom />;
    case WhiteboardRoomType:
      return <WhiteBoardRoom />;
    default:
      return 'Not implemented';
  }
};

function AuthedLayout(props) {
  const {
    currentRoom,
  } = props;

  return (
    <div className={style.layout}>
      <AudioStreams />
      <Header />
      <Dialog />
      <div className={style.room}>
        <div className={style.roomInner}>
          {room(currentRoom)}
        </div>
      </div>
    </div>
  );
}

AuthedLayout.propTypes = {
  currentRoom: PropTypes.string.isRequired,
};

export default AuthedLayout;
