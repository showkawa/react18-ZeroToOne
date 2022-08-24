import { render, screen } from '@testing-library/react';
import App from '../src/App';

import { shallow } from 'enzyme'
import React from 'react'

describe('___App_Test_Case____', () => {
  test('01_Test_UI_Component_By_Enzyme', () => {
    const wrapper = shallow(<App />)
    const appContent = wrapper.find('.App').text();
    expect(appContent).toBe('DDDDD');
  })

  test('02_Test_UI_Component_By_Testing_Library_React', () => {
    render(<App />);
    const linkElement = screen.getByText('DDDDD');
    expect(linkElement).toBeInTheDocument();
  })
});