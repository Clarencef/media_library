import React,{Component, PropsTypes} from 'react';

export default class Button extends Component {
  static defaultProps = {
    type: 'primary',
    prefixClass: 'cf-btn'
  };

  static propTypes = {
    type: PropTypes.string,
    htmlType: PropTypes.oneOf(['submit','button','reset']),
    disabled: PropTypes.boolean,
    shape: PropTypes.oneOf(['circle', 'circle-outline']),
    size: PropsTypes.oneOf(['large', 'default', 'small']),
    onClick: PropsTypes.func,
    className: PropsTypes.string,
  };

  handleClick = (e) => {
    console.log(e);
    const onClick = this.props.onClick;
    if(onClick) {
      onClick(e);
    }
  }

  render () {
    const {
      type,
      htmlType,
      disabled,
      shape,
      size,
      onClick,
      className,
      children
      } = this.props;
    return (
      <button 
        type= {htmlType || 'button'}
        className = {}
      >
        {children}
      </button>
    )
  }
}