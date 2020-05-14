import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';
import AuthContext from '../../contexts/auth';
import { Container, Logo, SocialLogin, ButtonLogin } from './styles';

const SignIn: React.FC = () => {
  const { signInAuthGoogle, signInAuthFacebook } = useContext(AuthContext);

  return (
    <Container>
      <Logo />
      <SocialLogin>
        <ButtonLogin
          social="facebook"
          type="button"
          onClick={signInAuthFacebook}
          id="facebook"
        >
          <FaFacebookSquare />
          Sign in with Facebook
        </ButtonLogin>
        <ButtonLogin
          social="google"
          type="button"
          onClick={signInAuthGoogle}
          id="google"
        >
          <FcGoogle />
          Sign in with Google
        </ButtonLogin>
      </SocialLogin>
    </Container>
  );
};

export default SignIn;
