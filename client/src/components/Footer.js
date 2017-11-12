import React from 'react';

const iconStyle = {
  fontSize: "2em",
  paddingRight: "12px"
}

export default () =>
  <footer className="page-footer orange">
    <div className="container">
      <div className="row">
        <div className="col s4">
          <h5>Stefan</h5>
          <div style={{ display: "flex", flexDirection: "row"}}>
            <a href="https://github.com/ic3mango" aria-label="github">
              <i style={iconStyle} className="fa fa-2x fa-github-square teal-text lighten-4" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/ic3mango" aria-label="twitter">
              <i style={iconStyle} className="fa fa-2x fa-twitter teal-text lighten-4" aria-hidden="true"></i>
            </a>
            <a href="https://stackoverflow.com/users/7364088/stefan" aria-label="stack overflow">
              <i style={iconStyle} className="fa fa-2x fa-stack-overflow teal-text lighten-4" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col s8">
          <h5>Built with</h5>
          <div>
            <i style={iconStyle} className="devicon-react-original-wordmark" aria-hidden="true"></i>
            <i style={iconStyle} className="devicon-nodejs-plain" aria-hidden="true"></i>
            <i style={iconStyle} className="devicon-mongodb-plain-wordmark" aria-hidden="true"></i>
            <i style={iconStyle} className="devicon-heroku-original-wordmark" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <a className="blue-text" href="https://github.com/ic3mango/FateVoke">GitHub Repo: ic3mango/FateVoke</a>
        <span className="right">© 2017 Deployed on Heroku</span>
      </div>
    </div>
  </footer>
