import { useState } from 'react'

const Display = props => <div>{text}</div>

const StatisticsLine = ({text,value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  console.log('good value', good)
  console.log('neutral value', neutral)
  console.log('bad value', bad)

  let total = good + neutral + bad

  if(total > 0)
    return(
      <div>
        <h1>statistics</h1>
        <p></p>
          <table>
            <tbody>
              <StatisticsLine text="good" value={good} />
              <StatisticsLine text="neutral" value={neutral} />
              <StatisticsLine text="bad" value={bad} />
              <StatisticsLine text="all" value={total} />
              <StatisticsLine text="average" value={(good - bad)/total} />
              <StatisticsLine text="positive" value={(good)/total*100} />
            </tbody>        
          </table>
      </div>
    )
    
  else{
    return(
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0,
  })

  // save clicks of each button to its own state
  const handleGoodClick = () => setClicks({...clicks, good: clicks.good + 1})
  const handleNeutralClick = () => setClicks({...clicks, neutral: clicks.neutral + 1})
  const handleBadClick = () => setClicks({...clicks, bad: clicks.bad + 1})
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleGoodClick()} text="good" />
      <Button onClick={() => handleNeutralClick()} text="neutral" />
      <Button onClick={() => handleBadClick()} text="bad" />
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad}/>
    </div>
  )
}

export default App