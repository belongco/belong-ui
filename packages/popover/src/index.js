// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import Popper from 'popper.js';
import _ from 'lodash';

import './index.scss';

const POPOVER_CONTEXT = '__blng-popover__';

class PopoverArrow extends React.Component {
  static displayName = 'PopoverArrow';
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    onMount: PropTypes.func,
    placement: PropTypes.string,
    arrowStyles: PropTypes.object,
  };
  static contextTypes = {
    [POPOVER_CONTEXT]: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.context[POPOVER_CONTEXT].onArrowMount(this.arrowNode);
  }

  getStyles = () => {
    const { placement, arrowStyles = {} } = this.context[POPOVER_CONTEXT];

    const styles = _.find([{
      top: '-10px',
      left: `${arrowStyles.left}px`,
      isApplied: _.includes(placement, 'bottom'),
    }, {
      bottom: '-10px',
      left: `${arrowStyles.left}px`,
      isApplied: _.includes(placement, 'top'),
      transform: 'rotate(180deg)',
    }, {
      top: `${arrowStyles.top}px`,
      right: '-14px',
      isApplied: _.includes(placement, 'left'),
      transform: 'rotate(90deg)',
    }, {
      top: `${arrowStyles.top}px`,
      left: '-14px',
      isApplied: _.includes(placement, 'right'),
      transform: 'rotate(-90deg)',
    }], { isApplied: true });

    return _.omit(styles, ['isApplied']);
  }

  render() {
    return (
      <div
        className={getClassNames('blng-popover__arrow', this.props.className)}
        ref={(ref) => {
          this.arrowNode = ref;
        }}
        style={this.getStyles()}
      />
    );
  }
}

class PopoverContent extends React.Component {
  static displayName = 'PopoverContent';
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    isOpen: PropTypes.bool,
    placement: PropTypes.string,
  };
  static contextTypes = {
    [POPOVER_CONTEXT]: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.context[POPOVER_CONTEXT].onContentMount(this.contentNode);
  }

  getStyles = () => {
    const { popoverStyles = {}, refStyles = {}, placement, arrowStyles = {} } = this.context[POPOVER_CONTEXT];

    const styles = _.omit(_.find([{
      top: _.isEmpty(arrowStyles) ? '0' : '10px',
      left: '0px',
      transform: `translate3d(${popoverStyles.left}px, ${popoverStyles.top}px, 0)`,
      isApplied: _.includes(placement, 'bottom'),
    }, {
      top: _.isEmpty(arrowStyles) ? '0' : '-10px',
      left: '0px',
      isApplied: _.includes(placement, 'top'),
      transform: `translate3d(${popoverStyles.left}px, ${popoverStyles.top}px, 0)`,
    }, {
      top: '0px',
      left: _.isEmpty(arrowStyles) ? '0' : '-10px',
      isApplied: _.includes(placement, 'left'),
      transform: `translate3d(${popoverStyles.left}px, ${popoverStyles.top}px, 0)`,
    }, {
      top: '0px',
      left: `${(_.isEmpty(arrowStyles) ? 0 : 10)}px`,
      isApplied: _.includes(placement, 'right'),
      transform: `translate3d(${refStyles.right}px, ${popoverStyles.top}px, 0)`,
    }], { isApplied: true }), ['isApplied']);

    styles.transform = this.props.isOpen ? `${styles.transform} scale(1)` : `${styles.transform} scale(0.9)`;

    return {
      visibility: this.props.isOpen ? 'visible' : 'hidden',
      opacity: this.props.isOpen ? 1 : 0,
      willChange: 'transform',
      ...styles,
      position: popoverStyles.position || 'absolute',
    };
  }

  contentNode = null;
  arrowNode = null;

  render() {
    const { isOpen } = this.props;

    return (
      <div
        className={
          getClassNames('blng-popover__content', `blng-popover__content--${this.props.placement}`, this.props.className, {
            'blng-popover__content--open': isOpen,
          })}
        ref={(ref) => {
          this.contentNode = ref;
        }}
        style={this.getStyles()}
      >
        {this.props.children}
      </div>
    );
  }
}

function PopoverOverlay({ isOpen, onClick }) {
  let popoverOverlayNode = null;

  return isOpen ? (
    <div
      ref={(ref) => { popoverOverlayNode = ref; }}
      className="blng-popover__overlay"
      onClick={(e) => {
        if (popoverOverlayNode === e.target) {
          onClick(e);
        }
      }}
    />
  ) : null;
}

PopoverOverlay.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

PopoverOverlay.displayName = 'PopoverOverlay';

class PopoverTarget extends React.Component {
  static displayName = 'PopoverTarget';
  static propTypes = {
    isOpen: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.element,
  };
  static contextTypes = {
    [POPOVER_CONTEXT]: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.context[POPOVER_CONTEXT].onTargetMount(this.targetNode);
  }

  targetNode = null;

  render() {
    const { isOpen } = this.props;

    return (
      <div
        className={getClassNames('blng-popover__target', this.props.className, {
          'blng-popover__target--open': isOpen,
        })}
        ref={(ref) => {
          this.targetNode = ref;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

/**
 * @example ../README.md
 */
export default class Popover extends React.Component {
  static displayName = 'Popover';
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    options: PropTypes.object,
    placement: PropTypes.string,
    isEventsEnabled: PropTypes.bool,
    canFlip: PropTypes.bool,
  };

  static defaultProps = {
    placement: 'bottom',
    isEventsEnabled: false,
    canFlip: true,
  };

  static childContextTypes = {
    [POPOVER_CONTEXT]: PropTypes.object.isRequired,
  };

  static TARGET = PopoverTarget;
  static CONTENT = PopoverContent;
  static ARROW = PopoverArrow;
  static OVERLAY = PopoverOverlay;

  state = {
    offsets: null,
    originalPlacement: _.get(this.props, 'placement', 'bottom'),
    placement: _.get(this.props, 'placement', 'bottom'),
  };

  getChildContext() {
    return {
      [POPOVER_CONTEXT]: {
        onTargetMount: (ref) => {
          this.targetNode = ref;
        },
        onTargetUnMount: () => {
          this.targetNode = null;
        },

        onContentMount: (contentNode) => {
          this.contentNode = contentNode;
        },
        onConentUnMount: () => {
          this.contentNode = null;
        },

        onArrowMount: (arrowNode) => {
          this.arrowNode = arrowNode;
        },
        onArrowUnMount: () => {
          this.arrowNode = null;
        },

        popoverStyles: _.get(this.state, 'offsets.popper', {}),
        arrowStyles: _.get(this.state, 'offsets.arrow', {}),
        refStyles: _.get(this.state, 'offsets.reference', {}),
        placement: this.state.placement,
      },
    };
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.initializePopper();
  }

  componentDidUpdate(prevProps) {
    if (this.popperInstance) {
      if (!_.isEqual(prevProps.placement, this.props.placement)) {
        this.popperInstance = null;
        this.initializePopper();
      } else {
        this.popperInstance.scheduleUpdate();
      }
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }
    this.targetNode = null;
    this.contentNode = null;
    this.popperInstance = null;
    this.arrowNode = null;
  }

  targetNode = null;
  contentNode = null;
  popperInstance = null;
  arrowNode = null;

  applyReactStyles = (data) => {
    if (
      this.isComponentMounted &&
      (this.state.offsets && !_.isEqual(data.offsets, this.state.offsets)) ||
      !this.state.offsets
    ) {
      this.setState({
        offsets: data.offsets,
        placement: data.placement,
        originalPlacement: data.originalPlacement,
      });
    }
  }
  initializePopper = () => {
    if (!this.popperInstance && (this.targetNode && this.contentNode)) {
      const modifiers = {
        modifiers: {
          ...(this.props.canFlip ? {
            preventOverflow: { enabled: true },
            flip: {
              behavior: ['bottom', 'top', 'left', 'right'],
            },
          } : {
            preventOverflow: { enabled: false },
            flip: { enabled: false },
          }),
          ...(this.arrowNode ? {
            arrow: {
              element: this.arrowNode,
            },
          } : {}),
          applyStyle: { enabled: false },
          applyReactStyles: {
            enabled: true,
            fn: (data) => {
              this.applyReactStyles(data);

              return data;
            },
            order: 900,
          },
        },
      };

      const options = {
        placement: this.props.placement,
        eventsEnabled: this.props.isEventsEnabled,
        ...modifiers,
      };

      this.popperInstance = new Popper(this.targetNode, this.contentNode, options);
      this.popperInstance.scheduleUpdate();
    }
  }
  render() {
    const children = React.Children.map(this.props.children, (child) => {
      const childName = _.get(child, 'type.displayName', '');

      if (childName === 'PopoverTarget') {
        return React.cloneElement(child, {
          onMount: (ref) => {
            this.targetNode = ref;
          },
          onUnMount: () => {
            this.targetNode = null;
          },
        });
      }

      if (childName === 'PopoverContent') {
        return React.cloneElement(child, {
          onMount: (contentNode, arrowNode = null) => {
            this.contentNode = contentNode;
            this.arrowNode = arrowNode;
          },
          onUnMount: () => {
            this.contentNode = null;
          },
          popoverStyles: _.get(this.state, 'offsets.popper', {}),
          arrowStyles: _.get(this.state, 'offsets.arrow', {}),
          refStyles: _.get(this.state, 'offsets.reference', {}),
          placement: this.state.placement,
        });
      }

      return child;
    });

    return (children);
  }
}
