require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

import {HelloWorld} from './HelloWorld.js'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <HelloWorld />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
