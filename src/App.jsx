import { useState } from 'react'

function App() {

  const [name , setName] = useState("Hackathon 2.0")
  const [date , setDate] = useState("23 24")
  const [oraga , setOraga] = useState("GPM")

  return (
    <>
    <div>
      <h1>{name}</h1>
      <h2>{date}</h2>
      <h3>{oraga}</h3>
    </div>
    </>
  )
}

export default App
