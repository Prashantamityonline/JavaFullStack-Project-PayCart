import { put, takeEvery } from "redux-saga/effects";
import {
  CREATE_MAINCATEGORY,
  CREATE_MAINCATEGORY_RED,
  DELETE_MAINCATEGORY,
  DELETE_MAINCATEGORY_RED,
  GET_MAINCATEGORY,
  GET_MAINCATEGORY_RED,
  UPDATE_MAINCATEGORY,
  UPDATE_MAINCATEGORY_RED,
} from "../Constants";

import {
  createMultipartRecord,
  deleteRecord,
  getRecord,
  updateMultipartRecord,
} from "./Services";

function* createSaga(action) {
  try {
    let response = yield createMultipartRecord("maincategory", action.payload);
    yield put({ type: CREATE_MAINCATEGORY_RED, payload: response });
  } catch (error) {
    console.error("Create Maincategory Error:", error);
  }
}

function* getSaga() {
  let response = yield getRecord("maincategory");
  yield put({ type: GET_MAINCATEGORY_RED, payload: response });
}
function* updateSaga(action) {
  let { id, payload } = action.payload;
  let response = yield updateMultipartRecord("maincategory", id, payload);
  yield put({ type: UPDATE_MAINCATEGORY_RED, payload: response });
}

function* deleteSaga(action) {
  yield deleteRecord("maincategory", action.payload);
  yield put({ type: DELETE_MAINCATEGORY_RED, payload: action.payload });
}

export default function* maincategorySaga() {
  yield takeEvery(CREATE_MAINCATEGORY, createSaga);
  yield takeEvery(GET_MAINCATEGORY, getSaga);
  yield takeEvery(UPDATE_MAINCATEGORY, updateSaga);
  yield takeEvery(DELETE_MAINCATEGORY, deleteSaga);
}
