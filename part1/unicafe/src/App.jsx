import { useState } from 'react'

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value ={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="all" value ={props.total} />
          <StatisticLine text="average" value ={((props.good * 1 + props.bad * -1) / props.total).toFixed(2)} />
          <StatisticLine text="positive" value ={`${((props.good / props.total)*100).toFixed(2)} %`}/>
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
)
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
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad'/>
      <Statistics good={good} total={total} bad={bad} neutral={neutral}/>
    </div>


  )
}

export default App