// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = React.useState(null)
  const [name, setName] = React.useState('')
  // const nameRef = React.useRef()

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(e.target.elements[0].value)
    // const value = e.target.name.value
    // const value = useRef(e.target.name.value)
    // const value = nameRef.current.value
    onSubmitUsername(name)
  }

  const handleChange = e => {
    const {value} = e.target
    setName(value.toLowerCase())
    // setError(isLowerCase ? null : 'Username must be lower case')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Username:</label>
        <input type="text" id="name" onChange={handleChange} value={name} />
      </div>
      {/* <div style={{backgroundColor: 'red'}}>{error}</div> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
