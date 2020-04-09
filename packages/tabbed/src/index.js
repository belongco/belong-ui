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
    isVertical: PropTypes.bool,
    tabs: PropTypes.array,
    selectedTab: PropTypes.number,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    selectedTab: 1,
    isVertical: false,
  }
  state = {};

  render() {
    return (
      <div
        className={getClassnames('blng-tabbed', {
          'blng-tabbed__vertical': this.props.isVertical,
        })}
      >
        {_.map(this.props.tabs, (tab, index) => (
          <div
            key={index}
            className={getClassnames('blng-tabbed__item', {
              'blng-tabbed__item-horizontal': !this.props.isVertical,
              'blng-tabbed__item-vertical': this.props.isVertical,
              active: index + 1 === this.props.selectedTab,
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
