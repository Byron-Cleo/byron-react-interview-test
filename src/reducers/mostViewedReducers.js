import {
    MOST_VIEWED_REQUEST,
    MOST_VIEWED_SUCCESS,
    MOST_VIEWED_FAIL,
    MOST_VIEWED_DETAIL_REQUEST,
    MOST_VIEWED_DETAIL_SUCCESS,
    MOST_VIEWED_DETAIL_FAIL,
    
  } from '../constants/mostViewedConstants';
  
  export const mostViewedListReducer = (
    state = { mostViewedArticles: [] },
    action
  ) => {
    switch (action.type) {
      case MOST_VIEWED_REQUEST:
        return { loading: true, mostViewedArticles: [] };
      case MOST_VIEWED_SUCCESS:
        return {
          loading: false,
          mostViewedArticles: action.payload,
        };
      case MOST_VIEWED_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const mostViewedDetailsReducer = (state = {}, action) => {
    switch (action.type) {   
      case MOST_VIEWED_DETAIL_REQUEST:
        return { loading: true };
      case MOST_VIEWED_DETAIL_SUCCESS:
        return {
          loading: false,
          customerOrder: action.payload,
        };
      case MOST_VIEWED_DETAIL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };