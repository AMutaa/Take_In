import React, { Fragment, Component } from 'react';
import styled from 'styled-components'

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <InputField />
        </form>
        <form>
          <InputField />
        </form>
      </Fragment>
    )
  }
}

const InputField = styled.input`
width: 400px;
height: 48px;
font-size:1.2em;
padding: 0 10px;
border-radius:3px;
border: 2px solid #6200EA;
outline:none;
font-weight:400;
border-bottom: none;
margin-bottom:0;
border-bottom-left-radius:0px;
border-bottom-right-radius:0px;
background:#F5F5F5;
`;