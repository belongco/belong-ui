// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import './index.scss';


/**
 * @example ../README.md
 */
export default class Loader extends React.Component {
  static defaultProps = {
    color: 'blue',
    size: 'small',
    isContinous: false,
    stepSize: 2000,
  };
  static propTypes = {
    color: PropTypes.oneOf(['blue', 'green', 'purple', 'orange']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'x-large']),
    isContinous: PropTypes.bool,
    className: PropTypes.string,
    stepSize: PropTypes.number,
  };

  state = {
    count: 0,
  };

  componentDidMount() {
    if (!this.props.isContinous) {
      this.animationInterval = setInterval(() => {
        this.setState({
          count: this.state.count + 1,
        });
      }, this.props.stepSize);
    }
  }

  componentWillUnmount() {
    if (!this.props.isContinous) {
      clearInterval(this.animationInterval);
    }
  }

  render() {
    const loaderColorClassName = `blng-loader__circle--color-${this.props.color}`;
    const isContinous = this.props.isContinous;
    const circleSizeClassName = `blng-loader__circle--size-${this.props.size}`;

    return (
      <div className={getClassNames('blng-loader', this.props.className)}>
        <div
          className={getClassNames('blng-loader__circle', 'blng-loader__circle--one', loaderColorClassName, circleSizeClassName, {
            'blng-loader__circle--animate': (this.state.count % 2 !== 0 && !isContinous),
            'blng-loader__circle--animate-continous': isContinous,
          })}
        ></div>
        <div
          className={getClassNames('blng-loader__circle', 'blng-loader__circle--two', loaderColorClassName, circleSizeClassName, {
            'blng-loader__circle--animate': (this.state.count % 2 !== 0 && !isContinous),
            'blng-loader__circle--animate-continous': isContinous,
          })}
        ></div>
        <div
          className={getClassNames('blng-loader__circle', 'blng-loader__circle--three', loaderColorClassName, circleSizeClassName, {
            'blng-loader__circle--animate': (this.state.count % 2 !== 0 && !isContinous),
            'blng-loader__circle--animate-continous': isContinous,
          })}
        ></div>
      </div>
    );
  }
}
