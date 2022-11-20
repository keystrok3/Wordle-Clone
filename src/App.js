import './App.css';

import WordleBoard from './WordleBoard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 >Wordle</h2>
      </header>

      <main className='App-main'>
        <div className="wordle-panel">
          <WordleBoard />
        </div>
        <div className="wordle-keyboard">
          
        </div>
      </main>
    </div>
  );
}




export default App;
