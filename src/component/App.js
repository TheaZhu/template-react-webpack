import React, { Component } from 'react';

import './App.less';

const prefixCls = 'app';

export default class App extends Component {

  render() {
    return (
      <div className={`${prefixCls}`}>
        Hello World!
        <span className="icon-arrow-right" />
      </div>
    );
  }
}

