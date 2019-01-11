import React, { Component, Fragment } from 'react';
import Input from './Components/Input'
import DateInput from './Components/DateInput'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Input />
        <DateInput />
      </Fragment>
    );
  }
}

export default App;
