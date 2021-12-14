import * as React from 'react';
import './button.scss';

interface IProps {
  children: React.ReactChildren;
  type: string;
  className: string;
  component: string;
  href: string;
  onClick: React.MouseEventHandler;
}
/* 
* @ButtonBase 
基础组件，主要用于处理buton按钮的公共的一些时间处理onClick、onBlur事件的处理 
包含样式信息越少越好
*/
const ButtonBase = React.forwardRef(function ButtonBase(props: IProps, ref) {
  const {
    children,
    type,
    className,
    component = 'button',
    ...otherProps
  } = props;
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
