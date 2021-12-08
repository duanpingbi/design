import React from 'react';
import ButtonBase from './ButtonBase';
import clsx from 'clsx';
import './button.scss';
/**
 * @props 接受的props参数
 * 需要实现的功能：
 * 1.样式  对于中文需要自动插入空格，
 */
const Button = React.forwardRef(function Button(props, ref) {
  const handelClick = (e) => {
    e.preventDefault();
    const { onClick } = props;
    onClick && onClick(e);
  };
  const { children, className, type, outline, size, ...otherProps } = props;
  let btnStyle = type ? type : 'default';
  if (outline) {
    btnStyle = `${btnStyle}-outline`;
  }
  return (
    <ButtonBase
      {...otherProps}
      onClick={handelClick}
      ref={ref}
      className={clsx(className, btnStyle, size && `${size}`, 'ripple')}
    >
      {children}
    </ButtonBase>
  );
});

export default Button;
