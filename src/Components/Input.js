import React, {
  Component,
  Fragment
} from 'react';
import styled from 'styled-components'

export default class Input extends Component {
  state = {
    answer: '',
    value: ''
  }

  handleChange = (e) => {
    const typedChar = e.target.value
    this.setState({
      value: typedChar
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      value
    } = this.state
    const result = sequenceNum(value)
    this.setState({
      answer: result
    })
  }

  render() {
    const {
      answer,
      value
    } = this.state
    return ( <
      Fragment >
      <
      Section >
      <
      h1 > Find the value in Finobacci Sequence by the Index < /h1> <
      Answer > Answer: {
        answer
      } < /Answer> <
      form onSubmit = {
        this.handleSubmit
      } >
      <
      InputField type = 'number'
      value = {
        value
      }
      onChange = {
        this.handleChange
      }
      placeholder = "Type an Index..." / >
      <
      /form> <
      /Section> <
      /Fragment>
    )
  }
}

function sequenceNum(num) {
  if (num === 0) {
    return 0
  }
  if (num === 1) {
    return 1
  }
  return sequenceNum(num - 1) + sequenceNum(num - 2)
}


const Section = styled.div `
display: grid;
margin: 20px 20px;
`;

const Answer = styled.h2 `
height: 40px;
font-size: 1.5em;
letter-spacing: 3px;
color: #6200ee;

`;
const InputField = styled.input `
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