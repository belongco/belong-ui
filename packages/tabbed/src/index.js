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
    headers: PropTypes.array,
    panes: PropTypes.array,
    layout: PropTypes.oneOf(['horizontalTop', 'horizontalBottom', 'verticalLeft', 'verticalRight']),
    activeTabIndex: PropTypes.number,
    onActiveTabChange: PropTypes.func,
    className: PropTypes.string,
  };
  static defaultProps = {
    layout: 'horizontalTop',
    activeTabIndex: 0,
  }
  state = {
    activeTabIndex: this.props.activeTabIndex || 0,
  };

  render() {
    const { headers, panes, layout, className, activeTabIndex, onActiveTabChange } = this.props;

    return (
      <div
        className={getClassnames('blng-tabbed', {
          [`blng-tabbed__${layout}`]: _.isString(layout),
          className: !_.isEmpty(className),
        })}
      >
        <div className="blng-tabbed__header">
          {_.map(headers, (header, index) => (
            <div
              key={index}
              className={getClassnames('blng-tabbed__header-item', {
                'blng-tabbed__header-item__active': _.isEqual(activeTabIndex, index),
              })}
              onClick={() => {
                this.setState({
                  activeTabIndex: index,
                });
                onActiveTabChange(index);
              }}
            >
              {header}
            </div>
          ))}
        </div>
        <div className="blng-tabbed__content">
          {panes[activeTabIndex]}
        </div>
      </div>
    );
  }
}
