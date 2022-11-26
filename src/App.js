import { useEffect, useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import './App.css';

import WordleBoard from './WordleBoard.js';
import changeColour from './color_changer';

const boardArray = [
  [{letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}], 
  [{letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}],
  [{letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}], 
  [{letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}],
  [{letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}], 
  [{letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}, {letter: '', color: ''}]
];

const wordList = [
  'PLACE', 'SPECK', 'TREND', 'PAINT', 'LOFTY', 'BRAKE', 'TRAIL', 'GROAN', 'HEFTY'
];

const todaysWord = wordList[1];


const App = () => {

  const [ board, setBoard ] = useState(boardArray)


  let attempts = useRef(0);
  let current_letter = useRef(0);


  const handleKeydown = (event) => {
      if(event.key === 'Enter' && current_letter.current > 4) {
          current_letter.current = 0;  

          let currentcolors = changeColour(todaysWord, board[attempts.current - 1].map(data => data.letter));

          for(let i = 0; i < board[attempts.current - 1].length; i++) {
            
            board[attempts.current - 1][i].color = currentcolors[i];
          }

          setBoard(() => [ ...board ]);
      }

      else if(event.key === 'Backspace' && current_letter.current >= 0) {
          board[attempts.current][current_letter.current].letter = "";
          setBoard([ ...board ]);
          current_letter.current -= 1;
          
          if(current_letter.current < 0) current_letter.current = 0;
      }

      else if(parseInt(event.keyCode) >= 65 && parseInt(event.keyCode) <= 90 && current_letter.current <= 4) {
          board[attempts.current][current_letter.current].letter = event.key.toUpperCase()
          setBoard([ ...board ])
          current_letter.current += 1;
          if(current_letter.current > 4) {
              attempts.current += 1;
          }   
      }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    }
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h2 >Wordle</h2>
      </header>

      <main className='App-main'>
        <div className="wordle-panel">
          <WordleBoard board={ board } setBoard={ setBoard } />
        </div>
        <div className="wordle-keyboard">
          
        </div>
      </main>
    </div>
  );
};




export default App;
