import React from 'react';
import { Slider, Slide } from 'react-materialize';
import AllPolls from './AllPolls';

import backgroundRight from '../imgs/mike-kotsch-204198.jpg';
import backgroundCenter from '../imgs/elena-prokofyeva-17909.jpg';
import backgroundLeft from '../imgs/sebastian-unrau-31677.jpg';

const Landing = () => {
  return (
    <div>
      <Slider>
      	<Slide
      		src={backgroundCenter}
      		title="FateVoke - where your votes don't count">
      		Your daily source of fake polls to vote on
      	</Slide>
      	<Slide
      		src={backgroundLeft}
      		title="Create a poll"
      		placement="left">
      		By signing in with either Google or Twitter
      	</Slide>
      	<Slide
      		src={backgroundRight}
      		title="Share poll with your friends"
      		placement="right">
      		Vote on your favorite topics
      	</Slide>
      </Slider>
      <div className="container">
        <AllPolls />
      </div>
    </div>
  );
}

export default Landing;
