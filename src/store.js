import { createStore, combineReducers } from 'redux'
import { reducer as complaintReducer } from 'redux-form'

// export default createStore(
//   combineReducers({
//     form: complaintReducer
//   })
// );

const reducer = combineReducers({
  form: complaintReducer, // mounted under "form"
});

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;