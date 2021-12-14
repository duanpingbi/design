import * as React from 'react';
import clsx from 'clsx';
import './buttonGroup.scss';

/**
 * ButtonProps properties
 */
interface ButtonProps {
  /**
   * component 组件元素类型
   * @default "div"
   */
  component: string;
  /**
   * className 组件样式类名，可选
   */
  className?: string;
  /**
   * children 按钮子元素
   */
  children: React.ReactChildren;
  /**
   * orientation 排列方式 “horizontal”(水平布局) ｜ “vertical（垂直布局）”
   * @default “horizontal”
   */
  orientation?: string | 'horizontal' | 'vertical';
}

const ButtonGroup = React.forwardRef(function ButtonGroup(
  props: ButtonProps,
  ref,
) {
  const {
    component: Component = 'div',
    className,
    children,
    orientation = 'horizontal',
    ...other
  } = props;
  return (
    <Component ref={ref} className={clsx(`ds-group-${orientation}`)}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          className,
          ...other,
        });
      })}
    </Component>
  );
});

export default ButtonGroup;
