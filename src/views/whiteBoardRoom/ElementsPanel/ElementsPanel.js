import React, { PropTypes } from 'react';
import compose from 'recompose/compose';
import { withHandlers } from 'recompose';

import { RECT, CIRC, LINE, ELLS, TEXT } from 'vclub/constants/whiteboardElements';

import styles from './ElementsPanel.css';

const enhance = compose(
  withHandlers({
    onClickForRect: props => () => props.onClick(RECT),
    onClickForLine: props => () => props.onClick(LINE),
    onClickForCircle: props => () => props.onClick(CIRC),
    onClickForEllipse: props => () => props.onClick(ELLS),
    onClickForText: props => () => props.onClick(TEXT),
  })
);

function ElementsPanel(props) {
  const {
    onClickForRect, onClickForLine, onClickForCircle, onClickForEllipse, onClickForText,
    nextFigureType,
  } = props;

  function gCN(elm, nextFigType) {
    return elm === nextFigType
      ? styles.buttonCurrent
      : styles.button;
  }

  return (
    <ul className={styles.panel}>
      <li className={styles.element}>
        <button onClick={onClickForRect} className={gCN(RECT, nextFigureType)}>
          <svg viewBox="0 0 200 200">
            <rect x="5" y="5" width="190" height="190" />
          </svg>
          {/* Rect */}
        </button>
      </li>
      <li className={styles.element}>
        <button onClick={onClickForLine} className={gCN(LINE, nextFigureType)}>
          <svg viewBox="0 0 200 200">
            <line x1="20" y1="180" x2="180" y2="20" stroke="black" strokeWidth="20" />
          </svg>
          {/* Line */}
        </button>
      </li>
      <li className={styles.element}>
        <button onClick={onClickForCircle} className={gCN(CIRC, nextFigureType)}>
          <svg viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" />
          </svg>
        </button>
      </li>
      <li className={styles.element}>
        <button onClick={onClickForEllipse} className={gCN(ELLS, nextFigureType)}>
          <svg viewBox="0 0 200 200">
            <ellipse cx="100" cy="100" rx="100" ry="50" />
          </svg>
        </button>
      </li>
      <li className={styles.element}>
        <button onClick={onClickForText} className={gCN(TEXT, nextFigureType)}>
          <svg viewBox="0 0 200 200">
            <text x="10" y="40" style={{fontSize: 40}}>
              T
            </text>
          </svg>
        </button>
      </li>
    </ul>
  );
}

ElementsPanel.propTypes = {
  onClickForRect: PropTypes.func,
  onClickForLine: PropTypes.func,
  onClickForCircle: PropTypes.func,
  onClickForEllipse: PropTypes.func,
  onClickForText: PropTypes.func,
  nextFigureType: PropTypes.number,
};

export default enhance(ElementsPanel);
