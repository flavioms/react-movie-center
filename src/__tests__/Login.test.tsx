import React from 'react';
import { shallow } from 'enzyme';
import Login from '../pages/Login';

describe('Testing Login Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders form', () => {
    const wrapper = shallow(<Login />);
    const form = wrapper.find('form');
    expect(form.exists()).toBe(true);
  });

  it('renders email input', () => {
    const wrapper = shallow(<Login />);
    const input = wrapper.find('#email');
    expect(input.prop('type')).toEqual('email');
    expect(input.prop('placeholder')).toEqual('Digite seu e-mail');
  });

  it('renders password input', () => {
    const wrapper = shallow(<Login />);
    const input = wrapper.find('#password');
    expect(input.prop('type')).toEqual('password');
    expect(input.prop('placeholder')).toEqual('Digite sua senha');
  });

  it('should have button login', () => {
    const wrapper = shallow(<Login />);
    const button = wrapper.find('button');
    expect(button.prop('type')).toEqual('submit');
  });
});
