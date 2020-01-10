import { createStore, combineReducers } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
// Reducers
// @todo

const firebaseConfig = {
    apiKey: "AIzaSyDIn0O86ZJ8FAsmJ5Oin5bwLwSy2_CVF9w",
    authDomain: "react-campfire-aae24.firebaseapp.com",
    databaseURL: "https://react-campfire-aae24.firebaseio.com",
    projectId: "react-campfire-aae24",
    storageBucket: "react-campfire-aae24.appspot.com",
    messagingSenderId: "416035944240"
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};
// Третий аргумент нужен для использования reduxDevTools
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }

export default store;
