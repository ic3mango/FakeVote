import React from 'react';
import { Slider, Slide } from 'react-materialize';
import Polls from './Polls';
import Footer from './Footer';

import backgroundRight from '../imgs/mike-kotsch-204198.jpg';
import backgroundCenter from '../imgs/elena-prokofyeva-17909.jpg';
import backgroundLeft from '../imgs/sebastian-unrau-31677.jpg';

const slideTextStyle = {
  color: "#e50b0b"
}

const Landing = () => {
  return (
    <div>
      <Slider>
      	<Slide
      		src={backgroundCenter}
          style={slideTextStyle}
      		title="FateVoke - where votes don't count">
      		Vote without consideration, poll without consequence
      	</Slide>
      	<Slide
      		src={backgroundLeft}
          style={slideTextStyle}
      		title="Sign up to create polls"
      		placement="left">
      		Sign up with either Google or Twitter
      	</Slide>
      	<Slide
      		src={backgroundRight}
          style={slideTextStyle}
      		title="Share poll with your friends"
      		placement="right">
      		Copy URL and share with your friends
      	</Slide>
      </Slider>
      <div className="container">
        <Polls />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
