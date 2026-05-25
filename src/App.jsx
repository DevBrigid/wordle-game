import { useEffect, useState } from 'react';
import './App.css';
import wordList from './database/db.json';
import GuessLine from './components/GuessLine.jsx';


const Num_Guesses = 6;
const WORD_LENGTH = 5;

function App() {
 const [currentGuess, setCurrentGuess] = useState('');
 const [guesses, setGuesses] = useState(Array(Num_Guesses).fill(null));
 
//Get random word from the database;
  const [solution] = useState(() => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
    return randomWord;
  })

  //add event listeners
  useEffect(() => {
    if(!solution) return;

    const onPressKey = event => {
      //condition: when the game is over
      if(guesses[Num_Guesses - 1] !== null || guesses.includes(solution)){
        return;
      }

      //confirm if the key typed is a letter:
      const character = event.key.toLowerCase().charCodeAt(0);
      const isLetter = event.key.length === 1 &&
      character >= 'a'.charCodeAt(0) && 
      character <= 'z'.charCodeAt(0);

      //finalizing the game using the inputs
      setCurrentGuess(prevGuess => {
        if(event.key === "Backspace"){
          return prevGuess.slice(0,-1);
        }
        //Store the word in the guesses array when enter is pressed
        else if(event.key === "Enter" && prevGuess.length === WORD_LENGTH){
          const currentGuessIndex = guesses.findIndex(guess => guess === null); //find index where the guess is null/empty
          const guessesClone = [...guesses];
          guessesClone[currentGuessIndex] = prevGuess;
          setGuesses(guessesClone);
          return ''; //reset currentGuess after storing the guess
        }

        else if(prevGuess.length < WORD_LENGTH && isLetter){
          return prevGuess + event.key.toLowerCase();
        }
        return prevGuess;
      })
    };

    window.addEventListener('keydown', onPressKey);
    return () => {
      window.removeEventListener('keydown', onPressKey);
    };
  }, [ guesses, solution ]);
  
  const currentGuessIndex = guesses.findIndex(guess => guess === null);
  console.log(solution);

  return (
    <div className='board'>
      {
        guesses.map((guess, index) => {
          return (
            <GuessLine key={index}
            guess={(index === currentGuessIndex ? currentGuess : guess ?? '').padEnd(WORD_LENGTH)} //if the index is the current guess index, show the current guess, otherwise show the guess in the array or an empty string if it's null
            isFinal={currentGuessIndex > index || currentGuessIndex === -1} //if the current guess index is greater than the index, it means that the guess at that index has been finalized, or if there are no more guesses left (currentGuessIndex === -1), then all guesses are finalized
            solution={solution}
            />
          );
        })
      }
    </div>
  )
}

export default App;
