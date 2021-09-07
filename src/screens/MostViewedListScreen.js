import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDay,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { listMostViewedArticles } from '../actions/mostViewedArticlesActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const MostViewedListScreen = ({ history }) => {
  //method to fire the action
  const dispatch = useDispatch();

  //Select the loaded customers' list from central state
  const mostViewedList = useSelector((state) => state.mostViewedList);
  const { loading, error, mostViewedArticles } = mostViewedList;
  // console.log(topTenCustomers);

  useEffect(() => {
    dispatch(listMostViewedArticles());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      {mostViewedArticles.map((mostViewedArticle) => (
        <a href={mostViewedArticle.url} style={{cursor: "pointer"}}>
          <div key={mostViewedArticle.id} className="d-flex my-3 font">
            <img
              src="https://cdn.pixabay.com/photo/2020/01/30/12/27/st-petersburg-4805295__340.jpg"
              alt="nyt_image"
              style={{ width: '75px', height: '75px', borderRadius: '50%' }}
            />
            <div className="mx-3">
              <h5>{mostViewedArticle.title}</h5>
              <Row className="d-flex justify-content-between">
                <Col>
                  <p>{mostViewedArticle.byline}</p>
                </Col>
                <Col>
                  <p>
                    {' '}
                    <FontAwesomeIcon icon={faCalendarDay} className="mr-2" />
                    {mostViewedArticle.published_date}
                  </p>
                </Col>
              </Row>
            </div>

            <p>
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </div>
        </a>
      ))}
    </>
  );
};

export default MostViewedListScreen;
