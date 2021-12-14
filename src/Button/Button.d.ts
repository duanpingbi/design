import * as React from 'react';

export interface GroupProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * size 统一设置 Button 组件的按钮大小
   */
  size?: string;
}

export class Group extends React.Component<GroupProps, any> {}
interface HTMLAttributesWeak extends React.ButtonHTMLAttributes<HTMLElement> {
  type?: any;
  onClick?: any;
}
/**
 * ButtonProps properties
 */
export interface ButtonProps extends HTMLAttributesWeak {
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

export default class Button extends React.Component<ButtonProps, any> {
  static Group: typeof Group;
}
