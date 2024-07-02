import { UserActions } from "../../utils/_const";
import { addUserHTTP, getUserHTTP} from "../../utils/http";

export const userActions = {
    addUser,
    getUsers,
    removeUser,
    editUser
};

function addUser (user) {
    return(dispatch) => {
        return addUserHTTP(user).then(res => {
            dispatch({type: UserActions.ADD_USER, payload: res.data})
        })
        .catch(error => {
            console.error('Error adding user:', error);
            dispatch({ type: UserActions.ADD_USER_FAILURE, payload: error });
        });
        
    }
}

function getUsers() {
    return (dispatch) => {
        return getUserHTTP().then(res => {
            dispatch({ type: UserActions.GET_USERS, payload: res})
        })
        .catch(error => {
            dispatch({type: UserActions.GET_USERS_FAILURE, payload: error})
        })
    }
}

function removeUser() {
    return (dispatch) => {
        return ;
    }
}

function editUser() {
    return (dispatch) => {
        return;
    }
}

