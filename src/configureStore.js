import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(sagaMiddleware),
    process.env.NODE_ENV === 'development' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  ))

  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
