import { all, call, delay, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects"
import { createUserError, createUserSuccess, deleteUserError, deleteUserSuccess, loadUserError, loadUserSuccess, updateUserError, updateUserSuccess } from "./action"

import * as types from "./actiontypes"
import { createUserApi, deleteUserApi, loadUsersApi, updateUserApi } from "./api"
export default function* rootSaga() {
    yield all([...userSagas])
}
export function* onLoadUsersStartAsync() {
    try{
        const response = yield call(loadUsersApi)
        if(response.status === 200){
            yield delay(500)
            yield put(loadUserSuccess(response.data))
        }
    }
        catch (error){
            yield put(loadUserError(error.response.data))

        }

    }

export function* onLoadUsers(){
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}



export function* onCreateUsersStartAsync(payload) {
    try{
        const response = yield call(createUserApi,payload)
        if(response.status === 200){
            yield delay(500)
            yield put(createUserSuccess(response.data))
        }
    }
        catch (error){
            yield put(createUserError(error.response.data))

        }

    }
export function* onCreateUsers(){
    yield takeLatest(types.CREATE_USER_START, onCreateUsersStartAsync)
}



export function* ondeleteUsersStartAsync(userId) {
    try{
        const response = yield call(deleteUserApi,userId)
        if(response.status === 200){
            yield delay(500)
            yield put(deleteUserSuccess(userId))
        }
    }
        catch (error){
            yield delay(500)
            yield put(deleteUserError(error.response.data))

        }

    }
export function* ondeleteUsers(){
    while(true){
        const {payload : userId} = yield take(types.DELETE_USER_START)
        yield call(ondeleteUsersStartAsync,userId)
    }
}





export function* onupdateUsersStartAsync({payload:{id,formValue}}) {
    try{
        // console.log(payload,"payload")
        const response = yield call(updateUserApi,id,formValue)
        if(response.status === 200){
            yield delay(500)
            yield put(updateUserSuccess(id))
        }
    }
        catch (error){
            yield delay(500)
            yield put(updateUserError(error.response.data))

        }

    }
export function* onupdateUsers(){
    while(true){
        const {payload : userId} = yield take(types.UPDATE_USER_START)
        yield call(onupdateUsersStartAsync,userId)
    }
}

const userSagas = [fork(onLoadUsers),fork(onCreateUsers), fork(ondeleteUsers), fork(onupdateUsers)]
