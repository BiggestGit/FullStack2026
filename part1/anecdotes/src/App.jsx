import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}> {text} </ button>
const Header = ({text}) => <h1>{text}</h1>
const PrintMostVotedAnecdote = ({anecdotes, votes, mostVotes}) => <p>{anecdotes[votes.indexOf(mostVotes)]}</p>
const PrintMostVotedAmount = ({mostVotes}) => <p>has {mostVotes} votes</p>  

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]



const App = () => {

  let randomizeIndex = () => Math.floor(Math.random()*anecdotes.length)
  
  const [selected, setSelected] = useState(randomizeIndex)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNextClick = () => setSelected(randomizeIndex)
  const handleVoteClick = () => setVotes(votes.map((vote, index) => index === selected ? vote+1: vote))
  const mostVotes = Math.max(...votes)

  return (
    <div>
      <Header text ='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick= {handleVoteClick} text='vote' />
      <Button onClick= {handleNextClick} text='next anecdote' />
      <Header text ='Anecdote with most votes' />
      <PrintMostVotedAnecdote anecdotes={anecdotes} votes={votes} mostVotes={mostVotes}/>
      <PrintMostVotedAmount mostVotes={mostVotes} />


    </div>
  )
}

export default App