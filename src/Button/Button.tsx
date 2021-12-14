import * as React from 'react';
import ButtonBase from './ButtonBase';
import clsx from 'clsx';
import './button.scss';

/**
 * ButtonProps properties
 */
interface ButtonProps {
  /**
   * children 子元素
   */
  children: React.ReactChildren;
  /**
   * className 按钮样式
   */
  className?: string;
  /**
   * outline 是否为空心样式
   */
  outline?: boolean;
  /**
   * type 按钮的类型
   */
  type?: 'primary' | 'secondary' | 'normal';

  /**
   * size 按钮的尺寸
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * icons 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小
   */
  icons?: { loading?: React.ReactNode };
  /**
   *iconSize 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小
   */
  iconSize?: number | 'small' | 'medium' | 'large' | 'inherit';

  /**
   * htmlType 当 component = 'button' 时，设置 button 标签的 type 值
   */
  htmlType?: 'submit' | 'reset' | 'button';

  /**
   * component 设置标签类型
   * @default "button"
   */
  component?: 'button' | 'a' | React.ReactNode;

  /**
   * loading 设置按钮的载入状态
   */
  loading?: boolean;

  /**
   * ghost 是否为幽灵按钮
   */
  ghost?: true | false | 'light' | 'dark';

  /**
   * text 是否为文本按钮
   */
  text?: boolean;

  /**
   * warning 是否为警告按钮
   */
  warning?: boolean;

  /**
   * disabled 是否禁用
   */
  disabled?: boolean;

  /**
   * onClick 点击按钮的回调
   */
  onClick?: React.MouseEventHandler;

  /**
   * href 在Button组件使用component属性值为a时有效，代表链接页面的URL
   */
  href?: string;

  /**
   * target 在Button组件使用component属性值为a时有效，代表何处打开链接文档
   */
  target?: string;
}
const Button = React.forwardRef(function Button(props: ButtonProps, ref) {
  const handelClick = (e) => {
    e.preventDefault();
    const { onClick } = props;
    onClick && onClick(e);
  };
  const {
    children,
    className,
    type,
    outline = false,
    size,
    ...otherProps
  } = props;
  let btnStyle = type ? `ds-${type}` : 'ds-default';
  if (outline) {
    btnStyle = `ds-${btnStyle}-outline`;
  }
  return (
    <ButtonBase
      {...otherProps}
      onClick={handelClick}
      ref={ref}
      className={clsx(
        className,
        btnStyle,
        size && `${size}`,
        'ripple',
        'ds-btn',
      )}
    >
      {children}
    </ButtonBase>
  );
});

export default Button;
