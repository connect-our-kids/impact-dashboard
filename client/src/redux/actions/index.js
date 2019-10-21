// import * as ACTION_TYPES from './actionTypes';

// export const login_request = () => {
//   console.log('isFetching true');
//   return dispatch => {
//     dispatch({type: ACTION_TYPES.LOGIN_REQUEST})
//   }
// }

// export const login_success = () => {
//   return dispatch => {
//     dispatch({type: ACTION_TYPES.LOGIN_SUCCESS})
//   }
// }

// export const login_failure = () => {
//   return dispatch => {
//     dispatch({type: ACTION_TYPES.LOGIN_FAILURE})
//   }
// }

// export const logout_success = () => {
//   return dispatch => {
//     dispatch({type: ACTION_TYPES.LOGOUT_SUCCESS})
//   }
// }


export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';



export const increment = () => {
    console.log('working')
    return{
        type: INCREMENT,
        payload: 1
    }
};


export const decrement = () => {
    console.log('working!!!!')
    return{
        type: DECREMENT,
        payload: -1
    }
}