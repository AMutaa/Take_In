import React, { Fragment, Component } from 'react';

export default class Input extends Component {
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