import React, { PropTypes } from 'react';

import compose from 'recompose/compose';
import { withHandlers } from 'recompose';

import style from './HeaderRight.css';

const enhance = compose(
  withHandlers({
    onToggleMemberPanel: props => () => {
      props.dispatch(props.toggleMemberPanel());
    },
    onLogOut: props => () => {
      props.dispatch(props.logOut());
    },
  })
);

function HeaderRight(props) {
  const {
    numberOfMembers,

    onLogOut,
    onToggleMemberPanel,
  } = props;

  return (
    <ul className={style.ul}>
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
          <button
            className={style.tab}
          >
            Smth Else
          </button>
          <button
            className={style.tab}
          >
            Third Opt.
          </button>
        </div>
      </li>
    </ul>
  );
}

HeaderRight.propTypes = {
  numberOfMembers: PropTypes.number.isRequired,

  onLogOut: PropTypes.func.isRequired,
  onToggleMemberPanel: PropTypes.func.isRequired,
};

HeaderRight.defaultProps = {
  numberOfMembers: 1,
};

export default enhance(HeaderRight);
