import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reduxMulti from 'redux-multi';
import auth from '../components/LoginBox/reducer';
import categories from "../reducers/category";
import modal from "../reducers/modal";
import auth2 from "../reducers/auth";
import message from "../reducers/message";
import activeUser from "../reducers/activeUser";
import profile from "../reducers/profile";
import me from "../reducers/me";

const dev = process.env.NODE_ENV !== 'production';

const appReducer = combineReducers({
  auth,
  categories,
  modal,
  auth2,
  message,
  activeUser,
  profile,
  me
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};

const storeWithMiddleware = initialState => {
  if (dev) {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware, reduxMulti))
    );
  }
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, reduxMulti)
  );
};

export default storeWithMiddleware;
