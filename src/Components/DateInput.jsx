import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

export default class DateInput extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <h1>Convert string to Date</h1>
          <Answer>
            Answer
          </Answer>
          <form action="">
            <InputField>
            </InputField>
          </form>
        </Section>
      </Fragment>
    )
  }
}





const Section = styled.div`
display: grid;
margin: 20px 20px;
`;

const Answer = styled.h2`
height: 40px;
font-size: 1.5em;
letter-spacing: 3px;
color: #6200ee;

`;
const InputField = styled.input`
width: 200px;
height: 48px;
font-size:1.2em;
padding: 0 10px;
border-radius:3px;
border: 2px solid #6200EA;
outline:none;
font-weight:400;
background:#F5F5F5;
`;