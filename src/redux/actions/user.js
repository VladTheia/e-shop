import { signInWithGoogle, signOut } from "../../apis/firebase";

const startLoading = () => {
    return {
        type: 'START_LOADING'
    };
}

const updateUserData = (payload) => {
    return {
        type: 'UPDATE_USER_DATA',
        payload
    };
}

const updateUserError = (payload) => {
    return {
        type: 'UPDATE_USER_ERROR',
        payload
    };
}

export function loginUser() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });        
    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}