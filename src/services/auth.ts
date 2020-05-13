import { auth, UserInfo } from 'firebase';
import firebase from '../config/firebase';
import 'firebase/auth';

const signIn = async (): Promise<UserInfo | null> => {
  const provider = new auth.GoogleAuthProvider();
  const user: UserInfo | null | undefined = await firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => res.user?.providerData[0]);

  return user || null;
};
export default signIn;
