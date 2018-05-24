// @flow
import { compose, createStore, applyMiddleware } from 'redux';
import ReactNativeFirebase from 'react-native-firebase';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import initialState from './initialState';
import rootReducer from '../reducers/rootReducer';

const reduxFirebaseConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  profileFactory: (userData, profileData) => {
    const { user } = userData;
    return { ...user, ...profileData };
  },
  enableRedirectHandling: false
};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(ReactNativeFirebase.app(), reduxFirebaseConfig),
    reduxFirestore(ReactNativeFirebase.app()),
    applyMiddleware(
      thunkMiddleware.withExtraArgument(getFirebase),
      createLogger()
    )
  )
);

export default store;
