import React from 'react'
// import FlagCanada from '../../flags/src/icons/Canada.jsx'
import { FlagsCanada } from '../../flags/src'
console.log(FlagsCanada)

class App extends React.Component {
  render() {
    const { name } = this.props
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <FlagsCanada variant='circle' size='600'></FlagsCanada>
      </>
    )
  }
}

export default App
