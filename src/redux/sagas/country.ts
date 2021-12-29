import { takeLatest, call, put } from 'redux-saga/effects'
import getCountriesApi from './Api'
import { getCountries } from '../actions'
import { GET_COUNTRIES_SAGA } from '../../types'

function* fetchCountriesWithSaga(): any {
  const response = yield call(getCountriesApi)
  yield put(getCountries(response))
}

const countriesData = [takeLatest(GET_COUNTRIES_SAGA, fetchCountriesWithSaga)]

export default countriesData
