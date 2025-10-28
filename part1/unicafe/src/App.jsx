import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>
    setGood( good + 1)

  const handleNeutral = () =>
    setNeutral(neutral + 1)

  const handleBad = () =>
    setBad( bad + 1 )

  const total = good + bad + neutral

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood} text='good'>good</button> 
      <button onClick={handleNeutral} text='neutral'>netural</button>
      <button onClick={handleBad} text='bad'>bad</button>
      <h1>statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {(good*1 + bad*-1)/total}</p>
      <p>Positive: {good/total}%</p>
    </div>


  )
}

export default App