---
nav:
  title: Paper
  path: /components
---

## Paper 组件

### 组件介绍

纸张效果，主要是给组件赋予了 box-shadow 的阴影效果，根据 elevation 值的不同，参数值也不一致

### 基本用法

```tsx
import React from 'react';
import { Paper } from 'design';

export default () => <Paper elevation={4}>测试</Paper>;
```

### paper

| Param                 | Description                | Type            | Enum                                | Default |
| --------------------- | -------------------------- | --------------- | ----------------------------------- | ------- |
| children _(required)_ | children 子元素            | `ReactChildren` |                                     |         |
| className             | className 组件类样式       | `string`        |                                     |         |
| elevation             | elevation 纸张阴影参数控制 | `number`        | 0，1，2，3，4，6，8，12，16，18，24 | 0       |
| component             | component 组件元素标签类型 | `string`        |                                     | "div"   |
