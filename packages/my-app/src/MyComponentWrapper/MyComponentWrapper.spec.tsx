import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MyComponentWrapper } from './MyComponentWrapper';

afterEach(() => cleanup());

it('renders component with default text', () => {
  const { getByText } = render(<MyComponentWrapper  />);
  getByText('Lorem ipsum dolor sit amet.');
});

it('renders component with label text', () => {
  const { getByText } = render(<MyComponentWrapper content="This is my content" />);
  getByText('This is my content');
});

