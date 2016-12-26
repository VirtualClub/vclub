import React, { PropTypes } from 'react';

import compose from 'recompose/compose';
import { withHandlers } from 'recompose';

// actions
import { logOut } from 'vclub/redux/club/auth';
import { toggleMemberPanel } from 'vclub/redux/club/ui';

import style from './HeaderRight.css';

import MediaButton from './MediaButton/MediaButton';
import ResultQuickVoteOf from './vote/ResultQuickVoteOf';


const enhance = compose(

  withHandlers({

    onToggleMemberPanel: props => () => {
      props.dispatch(toggleMemberPanel());
    },
    onLogOut: props => () => {
      props.dispatch(logOut());
    },
  })
);

function HeaderRight(props) {
  const {
    numberOfMembers,
    onLogOut,
    onToggleMemberPanel,
    user,
    dispatch,
    showModalVote,
  } = props;

  const displayVoteMenu = user.master;
  const modalIsOpen = showModalVote === false;
  const modalStyle = modalIsOpen ? style.modalISOpen : style.tab;

  return (
    <ul className={style.ul}>
      <li>
        <MediaButton className={style.tab} />
      </li>
      {displayVoteMenu && (
        <li>
          <ResultQuickVoteOf
            className={modalStyle}
            dispatch={dispatch}
          />
        </li>
      )}
      <li>
        <button
          className={style.tab}
          onClick={onToggleMemberPanel}
        >
          &#9977; {numberOfMembers}
        </button>
      </li>
      <li className={style.dropdown}>
        <button
          className={style.tab}
        >
          &#9776;
        </button>
        <div className={style.dropdownContent}>
          <button
            className={style.tab}
            onClick={onLogOut}
          >
            Log Out
          </button>
        </div>
      </li>
    </ul>
  );
}
/*eslint-disable */
HeaderRight.propTypes = {
  numberOfMembers: PropTypes.number.isRequired,
  onLogOut: PropTypes.func.isRequired,
  onToggleMemberPanel: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    master: PropTypes.bool.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
/*eslint-enable */
HeaderRight.defaultProps = {
  numberOfMembers: 0,
};

export default enhance(HeaderRight);
