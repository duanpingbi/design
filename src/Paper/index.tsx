import * as React from 'react';
import clsx from 'clsx';
import './style.scss';

/**
 * PaperProps properties
 */
interface PaperProps {
  /**
   * children 子元素
   */
  children: React.ReactChildren;
  /**
   * className 组件类样式
   */
  className?: string;
  /**
   * elevation 纸张阴影参数控制
   * @default 0
   */
  elevation?: number | 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;
  /**
   * component 组件元素标签类型
   * @default "div"
   */
  component?: string;
}

const Paper = React.forwardRef(function Paper(props: PaperProps, ref) {
  const {
    component: Component = 'div',
    className,
    elevation = 0,
    children,
  } = props;
  const classname = clsx(className, `ds-paper${elevation}`);
  return (
    <Component className={classname} ref={ref}>
      {children}
    </Component>
  );
});

export default Paper;
