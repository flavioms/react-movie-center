import React, { useContext } from 'react';
import { shallow, mount } from 'enzyme';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Routes from '../routes/index';
import AuthContext from '../contexts/auth';

describe('Testing SignIn Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have button login Facebook', () => {
    const wrapper = shallow(<SignIn />);
    const button = wrapper.find('#facebook');
    expect(button).toHaveLength(1);
  });

  it('should have button login Google', () => {
    const wrapper = shallow(<SignIn />);
    const button = wrapper.find('#google');
    expect(button).toHaveLength(1);
  });

  it('should show SingIn page', () => {
    const wrapper = mount(
      <AuthContext.Provider
        value={{
          signed: false,
          user: null,
          signInAuthFacebook: jest.fn(),
          signInAuthGoogle: jest.fn(),
          signOutAuth: jest.fn(),
        }}
      >
        <Routes />
      </AuthContext.Provider>,
    );

    expect(wrapper.find(SignIn)).toHaveLength(1);
  });

  it('should show Home page', () => {
    const wrapper = mount(
      <AuthContext.Provider
        value={{
          signed: true,
          user: { name: 'flavio', email: 'teste@teste.com.br' },
          signInAuthFacebook: jest.fn(),
          signInAuthGoogle: jest.fn(),
          signOutAuth: jest.fn(),
        }}
      >
        <Routes />
      </AuthContext.Provider>,
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
