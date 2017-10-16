import React from 'react';

export default () =>
  <footer className="page-footer orange">
    <div className="container">
      <div className="row">
        <div className="col s4">
          <h5>GitHub Repository for this website</h5>
          <a className="grey-text text-lighten-3" href="https://github.com/ic3mango/FateVoke">ic3mango/FateVoke</a>
        </div>
        <div className="col s4">
          <h5>Links</h5>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
            <a href="https://github.com/ic3mango"><i className="fa fa-3x fa-github black-text" aria-hidden="true"></i></a>
            <a href="https://twitter.com/ic3mango"><i className="fa fa-3x fa-twitter" aria-hidden="true"></i></a>
            <a href="https://stackoverflow.com/users/7364088/stefan"><i className="fa fa-3x fa-stack-overflow black-text" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col s4">
          <h5 style={{ textDecoration: "underline" }}>Technologies used</h5>
          <p>React | Redux | ReduxForm | ReactRouter | ReactChartJS2 | Node | Express | MongoDB | PassportJS</p>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2017 Deployed using Now
      </div>
    </div>
  </footer>
