// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import getClassnames from 'classnames';
// css modules
import './index.scss';

/**
 * @example ../README.md
 */
export default class Tabbed extends React.Component {
  static propTypes = {
    vertical: PropTypes.bool,
    tabs: PropTypes.array,
    activeTabIndex: PropTypes.number,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    activeTabIndex: 1,
    vertical: false,
  }
  state = {};

  render() {
    return (
      <div
        className={getClassnames('blng-tabbed', {
          'blng-tabbed__vertical': this.props.vertical,
        })}
      >
        {_.map(this.props.tabs, (tab, index) => (
          <div
            key={index}
            className={getClassnames('blng-tabbed__item', {
              'blng-tabbed__item-horizontal': !this.props.vertical,
              'blng-tabbed__item-vertical': this.props.vertical,
              active: index + 1 === this.props.activeTabIndex,
            })}
            onClick={() => { this.props.onClick(tab); }}
          >
            {tab.title}
          </div>
        ))}
      </div>
    );
  }
}
