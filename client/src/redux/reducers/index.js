// import * as ACTION_TYPES from '../actions/actionTypes';

// const initial_state = {
//   isAuthenticated: false,
//   isFetching: false,
//   profile: null
// }

// const reducer = (state = initial_state, action) => {
//   switch (action.type) {
//     case ACTION_TYPES.LOGIN_REQUEST:
//       console.log('fetching (in reducer)')
//       return {
//         ...state,
//         isFetching: true,
//         profile: action.payload.profile
//       }
//     case ACTION_TYPES.LOGIN_SUCCESS:
//       return {
//         ...state,
//         isAuthenticated: true,
//         isFetching: false,
//         profile: action.payload.profile
//       }
//     case ACTION_TYPES.LOGIN_FAILURE:
//       return {
//         ...state,
//         isFetching: false,
//         isAuthenticated: false
//       }
//     case ACTION_TYPES.LOGOUT_SUCCESS:
//       return {
//         ...state,
//         isAuthenticated: false,
//         profile: null
//       }
//     default:
//       return {...state};
//   }
// }

import { INCREMENT, DECREMENT} from '../actions/index'


const initial_state = {
    count: 0
}

export default (state = initial_state, action) => {
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + action.payload
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count + action.payload
            }
            default:
                return state;
    }
}

// export default reducer;