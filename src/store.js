import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    mostViewedListReducer,
    mostViewedDetailsReducer,
} from './reducers/mostViewedReducers';

const reducer = combineReducers({
  //Article Reducers
  mostViewedList: mostViewedListReducer,
  mostViewedDetails: mostViewedDetailsReducer,
}); 

//OUR MIDDLEWARE
const middleware = [thunk];  
 
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;   
