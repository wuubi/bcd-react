import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const title = 'React with Webpack and Babel';
ReactDOM.render(<App title={title} />, document.getElementById('root'));
if (typeof window !== 'undefined') {
  React.render(<MainWrapper />, document.getElementById('root'));
}
module.hot.accept();
