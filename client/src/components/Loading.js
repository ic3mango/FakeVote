import React from 'react';

export default () => (
  <div style={{ marginTop: "20px" }} className="center-align">
    <div className="preloader-wrapper active">
      <div className="spinner-layer spinner-red-only center-align">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  </div>
);
