import styled, { css } from 'styled-components';
import LogoPNG from '../../assets/logo.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.img.attrs(() => ({
  src: LogoPNG,
  alt: 'logo',
}))`
  width: 100%;
  max-width: 400px;
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2em;

  @media only screen and (max-width: 460px) {
    flex-direction: column;
  }
`;

interface ButtonLoginProps {
  social?: string;
}

export const ButtonLogin = styled.button<ButtonLoginProps>`
  background: #fff;
  color: #fff;
  border: none;
  padding: 1em;
  display: flex;
  flex-wrap: nowrap;
  min-width: 200px;
  justify-content: flex-start;
  align-items: center;
  margin: 1em;
  ${props =>
    props.social === 'facebook' &&
    css`
      background: #3b5998;
    `}

  ${props =>
    props.social === 'google' &&
    css`
      background: #fff;
      color: #797979;
    `}

  & > svg {
    font-size: 1.6em;
    margin-right: 0.5em;
  }
`;
