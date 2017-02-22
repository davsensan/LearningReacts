import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './StarRating';

ReactDOM.render(
  <StarRating totalStars={7} starsSelected={0} />,
    document.getElementById('root')
);
