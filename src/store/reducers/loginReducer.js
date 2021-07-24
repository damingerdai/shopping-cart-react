const initialState = {
  username: '',
  errMsg: ''
}

export function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.username,
        errMsg: '',
      };
    case "LOGOUT":
      return {
        ...state,
        username: null,
        errMsg: '',
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        username: action.user.username,
        errMsg: '',
      }
    case "LOGIN_FAIURE":
      return {
        ...state,
        username: null,
        errMsg: action.errMsg,
      }
    default:
      return {
        ...state,
      };
  }
}
