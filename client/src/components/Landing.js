import React from 'react';
import { Slider, Slide } from 'react-materialize';

import backgroundRight from './resources/amazing-sunset-mount-Kilimanjaro.jpg';
import backgroundCenter from './resources/patagonia_color.jpg';
import backgroundLeft from './resources/matterhorn_ray.jpg';

const Landing = () => {
  return (
    <div>
      <Slider>
      	<Slide
      		src={backgroundCenter}
      		title="FakeVote - where your votes don't count">
      		Create fake polls to vote on
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
      		View results by checking back with us
      	</Slide>
      </Slider>
    </div>
  );
}

export default Landing;
