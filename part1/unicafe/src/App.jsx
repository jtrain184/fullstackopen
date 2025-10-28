import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.total}</p>
      <p>Average: {(props.good * 1 + props.bad * -1) / props.total}</p>
      <p>Positive: {props.good / props.total}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>
    setGood(good + 1)

  const handleNeutral = () =>
    setNeutral(neutral + 1)

  const handleBad = () =>
    setBad(bad + 1)

  const total = good + bad + neutral

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood} text='good'>good</button>
      <button onClick={handleNeutral} text='neutral'>netural</button>
      <button onClick={handleBad} text='bad'>bad</button>
      <Statistics good={good} total={total} bad={bad} neutral={neutral}/>
    </div>


  )
}

export default App