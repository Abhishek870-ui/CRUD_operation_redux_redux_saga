import * as types from "./actiontypes"

// below function is used to call actiontypes.js file values
export const loadUserStart = () => ({
    type : types.LOAD_USERS_START
})
export const loadUserSuccess = (users) => ({
    type : types.LOAD_USERS_SUCCESS,
    payload : users,
})
export const loadUserError = (error) => ({
    type : types.LOAD_USERS_ERROR,
    payload : error,

})

// below function is used to call actiontypes.js file values TO ADD USER
export const createUserStart = () => ({
    type : types.CREATE_USER_START,

})
export const createUserSuccess = (users) => ({
    type : types.CREATE_USER_SUCCESS,
    payload : users,

})
export const createUserError = (error) => ({
    type : types.CREATE_USER_ERROR,
    payload : error,
})


// below function is used to call actiontypes.js file values TO DELETE USER
export const deleteUserStart = (userId) => ({
    type : types.DELETE_USER_START,
    payload : userId,

})
export const deleteUserSuccess = (userId) => ({
    type : types.DELETE_USER_SUCCESS,
    payload : userId,

})
export const deleteUserError = (error) => ({
    type : types.DELETE_USER_ERROR,
    payload : error,
})

// below function is used to call actiontypes.js file values TO update USER
export const updateUserStart = (userInfo) => ({
    type : types.UPDATE_USER_START,
    payload : userInfo,

})
export const updateUserSuccess = (userId) => ({
    type : types.UPDATE_USER_SUCCESS,

})
export const updateUserError = (error) => ({
    type : types.UPDATE_USER_ERROR,
    payload : error,
})