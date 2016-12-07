import React,{Component, PropTypes} from 'react';
import classNames from 'classnames';

class Button extends Component {
  constructor (props) {
    super();
  }

  static defaultProps = {
    type: 'primary',
    prefixClass: 'cf-btn'
  };

  static propTypes = {
    type: PropTypes.string,
    htmlType: PropTypes.oneOf(['submit','button','reset']),
    disabled: PropTypes.bool,
    shape: PropTypes.oneOf(['circle', 'circle-outline']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    onClick: PropTypes.func,
    className: PropTypes.string
  };

  handleClick = (e) => {
    console.log(e);
    const onClick = this.props.onClick;
    if(onClick) {
      onClick(e);
    }
  };

  render () {
    const {
      type,
      htmlType,
      disabled,
      shape,
      size,
      onClick,
      prefixClass,
      otherClassName,
      children
      } = this.props;

    const classes = classNames(prefixClass,{
      [`${prefixClass}-${type}`]:  type,
      [`${prefixClass}-${shape}`]: shape,
      [`${prefixClass}-${size}`]:  size,
    },otherClassName);

    return (
      <button 
        type= {htmlType || 'button'}
        className = {classes}
        onClick = {this.handleClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;