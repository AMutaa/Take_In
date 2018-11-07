import React, { Component } from 'react';
import TextBox from './Main';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Take In</h1>
        <TextBox />
      </div>
    )
  }
}