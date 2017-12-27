// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import './index.scss';

/**
 * @example ../README.md
 */
function Checkbox({ isChecked, onClick }) {
  return (
    <div
      className={getClassNames('blng-checkbox', {
        'blng-checkbox--checked': isChecked,
      })}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {isChecked ? <i className="fa fa-check"></i> : <i className="fa fa-minus"></i>}
    </div>
  );
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Checkbox;
