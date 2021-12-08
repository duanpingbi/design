import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('<Foo />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(<Button>测试</Button>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
