import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const title = 'BigCom.dev';
ReactDOM.render(<App title={title} />, document.getElementById('root'));
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}
if (typeof window !== 'undefined') {
  React.render(<MainWrapper />, document.getElementById('root'));
}
module.hot.accept();
