import { UserActions } from "../../utils/_const";

const initialState = {
    users: [],
    error: null
}

const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case UserActions.ADD_USER:
            return {
                ...state, 
                users: [...state.users, action.payload],
                error: null
            }
    
        case UserActions.ADD_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };

        case UserActions.GET_USERS:
            
            return {
                ...state, 
                users: action.payload,
                error: null
            }
    
        case UserActions.GET_USERS_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
 
        default: 
            return state;
        
    }
}

export default userReducer;