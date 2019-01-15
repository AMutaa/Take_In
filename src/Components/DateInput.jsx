import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import moment from 'moment'

export default class DateInput extends Component {
  state = {
    value: '',
    answer: ''
  }

  handleChange = (e) => {
    const typedChar = e.target.value
    this.setState({
      value: typedChar
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const dateConverter = () => {
      const dateString = this.state.value
      const dateObj = new Date(dateString)
      console.log(dateObj)
      const momentObj = moment(dateObj)
      console.log(momentObj)
      const momentString = momentObj.format('MM/DD/YYYY')
      console.log(momentString)
      this.setState({
        answer: momentString
      })
    }
    dateConverter()
  }

  componentWillReceiveProps(nextprops) {
    console.log(nextprops)
  }


  render() {

    const { value, answer } = this.state
    return (
      <Fragment>
        <Section>
          <h1>Convert string to Date</h1>
          <Answer>
            Answer: {answer}
          </Answer>
          <form onSubmit={this.handleSubmit} >
            <InputField value={value} placeholder='Type...' onChange={this.handleChange} />
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