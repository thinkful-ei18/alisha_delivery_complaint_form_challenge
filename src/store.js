import { createStore, combineReducers } from 'redux'
import { reducer as complaintReducer } from 'redux-form'

export default createStore(
  combineReducers({
    form: complaintReducer
  })
);