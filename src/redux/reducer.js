const initialState = {
    id: 0,
    username: '',
    profile_pic: ''
 }
 
 //ACTION TYPES
 const GET_USER_PROFILE = 'GET_USER_PROFILE'
 
 //ACTION CREATORS
 export function getUserProfile(userData) {
    return {
       type: GET_USER_PROFILE,
       payload: userData
    }
 }
 
 //REDUCER FUNCTION
 export default function reducer(state = initialState, action) {
    switch(action.type) {
       case GET_USER_PROFILE:
          let { id, username, profile_pic} = action.payload
          return {...state, 
             id: id,
             username: username,
             profile_pic: profile_pic}
 
       default:
          return state;
    }
 }
