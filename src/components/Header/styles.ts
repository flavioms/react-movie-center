import styled from 'styled-components';
import { lighten } from 'polished';
import LogoPNG from '../../assets/logo.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #182131;
  height: 90px;
  width: 100%;
  padding: 0 5%;
`;

export const Logo = styled.img.attrs(() => ({
  src: LogoPNG,
  alt: 'logo',
}))`
  width: 100%;
  max-width: 120px;
`;

export const InputFind = styled.div`
  opacity: 0.5;
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  border-radius: 30px;
  border: none;
  padding: 16px;
  width: 100%;
  max-width: 392px;
  height: 100%;
  max-height: 52px;
  display: flex;
  align-items: center;

  & > input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #fff;
    font-size: 1em;
    font-family: 'Source Sans Pro', sans-serif;

    &::placeholder {
      color: #fff;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 0;
      -webkit-text-fill-color: #fff;
      -webkit-box-shadow: 0;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  & > img {
    width: 52px;
    height: 52px;
    border-radius: 52px;
  }

  & > p {
    margin-left: 1em;
    font-size: 18px;
    font-weight: 500;
    line-height: 2.11;
    text-align: left;
    color: #ffffff;
  }
`;
interface MenuProps {
  open: boolean;
}

export const Menu = styled.button<MenuProps>`
  background: none;
  border: none;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: flex-end;
  margin: 0.6em;

  & > ul {
    visibility: ${props => (props.open ? 'visible' : 'hidden')};
    opacity: ${props => (props.open ? 1 : 0)};
    transition: visibility 0.3s ease, opacity 0.3s ease;
    position: absolute;
    top: 90px;
    right: 0;
    background: #182131;
    width: 300px;
    height: auto;
    z-index: 2;

    li {
      list-style: none;
      background-color: #182131;
      transition: background-color 0.5s;
    }

    li a {
      font-size: 16px;
      color: #fff;
      text-transform: capitalize;
      text-decoration: none;
      display: block;
      padding: 1em;
    }

    li:hover {
      background-color: ${lighten(0.1, '#182131')};
    }
  }
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  color: #fff;
`;
