import axios from 'axios';
import {
  MOST_VIEWED_REQUEST,
  MOST_VIEWED_SUCCESS,
  MOST_VIEWED_FAIL,
  MOST_VIEWED_DETAIL_REQUEST,
  MOST_VIEWED_DETAIL_SUCCESS,
  MOST_VIEWED_DETAIL_FAIL,
} from '../constants/mostViewedConstants';
import { API_URL, PERIOD, KEY } from './../config';

//READ TOP CUSTOMERS OPERATION(Read-LIST)
export const listMostViewedArticles = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MOST_VIEWED_REQUEST,
    });

    const { data } = await axios.get(`${API_URL}${PERIOD}.json?api-key=${KEY}`);
    console.log(data);

    dispatch({
      type: MOST_VIEWED_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: MOST_VIEWED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMostArticleDetail = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MOST_VIEWED_DETAIL_REQUEST,
    });

    const { data } = await axios.get(`${API_URL}${PERIOD}.json?apikey=${KEY}`);

    dispatch({
      type: MOST_VIEWED_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOST_VIEWED_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

