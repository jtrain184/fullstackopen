import { useState } from 'react'

const App = () => {
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
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] =useState(Array(anecdotes.length).fill(0))
  console.log(votes);
  const generateRandomNumber = () => {
  
    // Generate a random integer between a min and max (e.g., 1 to 100)
    const min = 0;
    const max = anecdotes.length - 1;
    const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(newNumber);
    setSelected(newNumber); // Update the state with the new random number
  };
    
    const addVote = () => {
      const copy = [...votes];
      copy[selected]+=1;
      setVotes(copy);
  };

    const findTopVote = () => {
      const maxValue = Math.max(...votes);
      return votes.indexOf(maxValue);
    }

 const topVoteIndex = findTopVote();
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <p>
        <button onClick={() => generateRandomNumber()}>
          next anectdote
        </button>
        <button onClick={() => addVote()}>
          vote
        </button>
      </p>
      <h1>The anecdoe with the most votes is:</h1>
      <p> {anecdotes[topVoteIndex]} </p>
      <p> with {votes[topVoteIndex]} </p>
    </div>
  )
}

export default App