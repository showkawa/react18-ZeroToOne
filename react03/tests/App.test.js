import { render, screen } from '@testing-library/react';
import App from '../src/App';

import { shallow } from 'enzyme'
import React from 'react'

describe('测试', () => {
  test('测试 snapshot', () => {
    const wrapper = shallow(<App />)
  })

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
});