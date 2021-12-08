import React from 'react';
import './button.scss';
/* 
* @ButtonBase 
基础组件，主要用于处理buton按钮的公共的一些时间处理onClick、onBlur事件的处理 
包含样式信息越少越好
*/
const ButtonBase = React.forwardRef(function ButtonBase(props, ref) {
  const {
    children,
    type,
    className,
    component = 'button',
    ...otherProps
  } = props;
  // const buttonRef = React.useRef(null);
  let ComponentProp = component;
  if (ComponentProp === 'button' && otherProps.href) {
    ComponentProp = 'a';
  }
  return (
    <ComponentProp {...otherProps} ref={ref} className={className}>
      {children}
    </ComponentProp>
  );
});
export default ButtonBase;
