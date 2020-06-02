import * as Types from './ActionTypes'

const initialState = {
  user: null,
  isLoading: false,
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.LOGOUT: {
      return { ...state, user: null };
    }
    case Types.SET_USER: {
      return { ...state, user: action.user };
    }
    case Types.SET_IS_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    case Types.SET_ERROR: {
      return { ...state, error: action.message, variant: action.variant };
    }
    default: {
      return state;
    }
  }
}
