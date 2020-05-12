import app from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAfZp2pxdLhaxePeozE9R6WMWJFJfnLjn8',
  authDomain: 'moviecenter-416af.firebaseapp.com',
  databaseURL: 'https://moviecenter-416af.firebaseio.com',
  projectId: 'moviecenter-416af',
  storageBucket: 'moviecenter-416af.appspot.com',
  messagingSenderId: '862011326823',
  appId: '1:862011326823:web:9e93170394de2779ccafc2',
};

const firebase = app.initializeApp(config);

export default firebase;
