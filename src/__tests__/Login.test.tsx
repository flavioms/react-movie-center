import React from 'react';
import { shallow, mount } from 'enzyme';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Routes from '../routes/index';
import AuthContext from '../contexts/auth';

describe('Testing SignIn Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders form', () => {
    const wrapper = shallow(<SignIn />);
    const form = wrapper.find('form');
    expect(form.exists()).toBe(true);
  });

  it('renders email input', () => {
    const wrapper = shallow(<SignIn />);
    const input = wrapper.find('#email');
    expect(input.prop('type')).toEqual('email');
    expect(input.prop('placeholder')).toEqual('Digite seu e-mail');
  });

  it('renders password input', () => {
    const wrapper = shallow(<SignIn />);
    const input = wrapper.find('#password');
    expect(input.prop('type')).toEqual('password');
    expect(input.prop('placeholder')).toEqual('Digite sua senha');
  });

  it('should have button login', () => {
    const wrapper = shallow(<SignIn />);
    const button = wrapper.find('button');
    expect(button.prop('type')).toEqual('submit');
  });

  it('should show SingIn page', () => {
    const wrapper = mount(
      <AuthContext.Provider
        value={{
          signed: false,
          user: null,
          signInAuth: jest.fn(),
          signOutAuth: jest.fn(),
        }}
      >
        <Routes />
      </AuthContext.Provider>,
    );

    expect(wrapper.find(SignIn)).toHaveLength(1);
  });

  it('should show SignUp page', () => {
    const wrapper = mount(
      <AuthContext.Provider
        value={{
          signed: true,
          user: { name: 'flavio', email: 'teste@teste.com.br' },
          signInAuth: jest.fn(),
          signOutAuth: jest.fn(),
        }}
      >
        <SignUp />
      </AuthContext.Provider>,
    );

    expect(wrapper.find(SignUp)).toHaveLength(1);
  });

  it('should show Home page', () => {
    const wrapper = mount(
      <AuthContext.Provider
        value={{
          signed: true,
          user: { name: 'flavio', email: 'teste@teste.com.br' },
          signInAuth: jest.fn(),
          signOutAuth: jest.fn(),
        }}
      >
        <Routes />
      </AuthContext.Provider>,
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
