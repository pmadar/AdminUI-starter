import { watchTestSaga } from './views/ViewTemplate/sagas'

export default function* rootSaga() {
  yield [
    watchTestSaga()
  ]
}
