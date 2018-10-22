// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import './index.scss';

/**
 * @example ../README.md
 */
function RadioBox({ isSelected, onClick }) {
  return (
    <div
      className={getClassNames('blng-radiobox', {
        'blng-radiobox--selected': isSelected,
      })}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {isSelected ? <div className="blng-radiobox__circle"></div> : null}
    </div>
  );
}

RadioBox.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default RadioBox;
