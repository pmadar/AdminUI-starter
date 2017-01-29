import { put, takeLatest } from 'redux-saga/effects'
import { testSagaSuccess } from './actions'

export function* testing() {
  yield put(testSagaSuccess())
}

export function* watchTestSaga() {
  yield takeLatest('TEST_SAGA', testing)
}
