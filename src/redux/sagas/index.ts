import { all } from 'redux-saga/effects'

import countrySaga from './country'

export default function* rootSaga() {
  yield all([...countrySaga])
}
