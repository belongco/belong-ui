// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import './index.scss';

/**
 * @example ../README.md
 */
function Toggle({ className, isToggle, onClick }) {
  return (
    <div>
      <label className={getClassNames('blng-toggle', className)}>
        <input
          className="blng-toggle__input"
          type="checkbox"
          checked={isToggle}
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        />
        <span className="blng-toggle__slider blng-toggle__slider-round"></span>
      </label>
    </div>
  );
}

Toggle.propTypes = {
  className: PropTypes.string,
  isToggle: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Toggle;

