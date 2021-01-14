import React from 'react'
// import FlagCanada from '../../flags/src/icons/Canada.jsx'
import { FlagsCanada } from '../../flags/src'
import { CoreArrowCircle } from '../../core/src'

class App extends React.Component {
  render() {
    const { name } = this.props
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <FlagsCanada variant='rectangle' size='600' rotate='nne'></FlagsCanada>
        <CoreArrowCircle variant='duo' size='600' rotate='nne' strokeWidth='2'></CoreArrowCircle>
      </>
    )
  }
}

export default App
