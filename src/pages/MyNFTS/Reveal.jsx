/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Reveal = ({ handleClick, title }) => (
  <div className="reveal__item" onClick={handleClick}>
    <div className="reveal__top">
      <div className="reveal__question-sign">
        ?<span className="reveal__question-sign-big">?</span>?
      </div>
      <div className="reveal__text-hover">Reveal</div>
    </div>
    <div className="reveal__title">
      <span># {title.padStart(5, '0')}</span>
      <div className="reveal__question-grey">?</div>
    </div>
  </div>
);

Reveal.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};

Reveal.defaultProps = {
  handleClick: () => {},
  title: '',
};

export default Reveal;
