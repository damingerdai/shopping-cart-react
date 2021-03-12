const initialState = {
  username: ''
}

export function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.username,
      };
    case "LOGOUT":
      return {
        ...state,
        username: null,
      };
    default:
      return {
        state,
      };
  }
}
