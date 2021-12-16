---
nav:
  title: Button
  path: /components
---

## Button 组件

### 基本用法：

Demo:

```tsx
import React from 'react';
import { Button } from 'design';

export default () => <Button>测试</Button>;
```

### Button

| Param                 | Description                                                                 | Type                                               | Enum        | Default   |
| --------------------- | --------------------------------------------------------------------------- | -------------------------------------------------- | ----------- | --------- | -------------------------------- | ---------- | --------------------------------------------- | --- |
| children _(required)_ | children 子元素                                                             | `ReactChildren`                                    |             |           |
| className             | className 按钮样式                                                          | `string`                                           |             |           |
| outline               | outline 是否为空心样式                                                      | `boolean`                                          | false, true |           |
| type                  | type 按钮的类型                                                             | `"primary"                                         | "secondary" | "normal"` | "primary", "secondary", "normal" |            |
| size                  | size 按钮的尺寸                                                             | `"small"                                           | "medium"    | "large"`  | "small", "medium", "large"       | "medium"   |
| icons                 | icons 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小                          | `{ loading?: any; }`                               |             |           |
| iconSize              | iconSize 按钮中 Icon 的尺寸，用于替代 Icon 的默认大小                       | `number                                            | "small"     | "medium"  | "large"                          | "inherit"` | number, "small", "medium", "large", "inherit" |     |
| htmlType              | htmlType 当 component = 'button' 时，设置 button 标签的 type 值             | `"submit"                                          | "reset"     | "button"` | "submit", "reset", "button"      |            |
| component             | component 设置标签类型                                                      | `any`                                              |             | "button"  |
| loading               | loading 设置按钮的载入状态                                                  | `boolean`                                          | false, true |           |
| ghost                 | ghost 是否为幽灵按钮                                                        | `boolean                                           | "light"     | "dark"`   | false, true, "light", "dark"     |            |
| text                  | text 是否为文本按钮                                                         | `boolean`                                          | false, true |           |
| warning               | warning 是否为警告按钮                                                      | `boolean`                                          | false, true |           |
| disabled              | disabled 是否禁用                                                           | `boolean`                                          | false, true |           |
| onClick               | onClick 点击按钮的回调                                                      | `(event: MouseEvent<Element, MouseEvent>) => void` |             |           |
| href                  | href 在 Button 组件使用 component 属性值为 a 时有效，代表链接页面的 URL     | `string`                                           |             |           |
| target                | target 在 Button 组件使用 component 属性值为 a 时有效，代表何处打开链接文档 | `string`                                           |             |           |

### ButtonGroup 示列：

Demo:

```tsx
import React from 'react';
import { Button } from 'design';
const { ButtonGroup } = Button;

export default () => (
  <ButtonGroup orientation="vertical">
    <Button>测试1</Button>
    <Button>测试2</Button>
    <Button>测试3</Button>
  </ButtonGroup>
);
```

### ButtonGroup

| Param                    | Description                                                           | Type            | Enum                      | Default      |
| ------------------------ | --------------------------------------------------------------------- | --------------- | ------------------------- | ------------ |
| component _(required)_   | component 组件元素类型                                                | `string`        |                           | "div"        |
| className                | className 组件样式类名，可选                                          | `string`        |                           |              |
| children _(required)_    | children 按钮子元素                                                   | `ReactChildren` |                           |              |
| orientation _(required)_ | orientation 排列方式 “horizontal”(水平布局) ｜ “vertical（垂直布局）” | `string`        | “horizontal” 、“vertical” | “horizontal” |
