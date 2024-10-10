import React, { useState } from 'react';
import StartScreen from './StartScreen';
import SectionScreen from './SectionScreen'; 
import Quiz from './quiz';  // Make sure the import casing is correct
import ResultScreen from './ResultScreen';
import quizDataA from '../data/quizDataA'; // Quiz data for Section A
import quizDataB from '../data/quizDataB'; // Quiz data for Section B
import quizDataC from '../data/quizDataC'; // Quiz data for Section C
import quizDataD from '../data/quizDataD'; // Quiz data for Section D


function App() {
  const [gameState, setGameState] = useState('start'); // 'start', 'sectionA', 'quizA', 'sectionB', 'quizB', 'result'
  const [score, setScore] = useState(0);

  // Start the game by showing section A
  const startGame = () => {
    setScore(0);
    setGameState('sectionA');
  };

  // Start the quiz for the selected section
  const startQuiz = (section) => {
    if (section === 'A') {
      setGameState('quizA');
    } else if(section==='B') {
      setGameState('quizB');
    } else if(section==='C') {
      setGameState('quizC');
    }
    else {
      setGameState('quizD');
    }
  };

  // End the quiz for a section and move to the next stage
  const endGame = (section) => {
    if (section === 'A') {
      setGameState('sectionB'); // After section A, move to section B
    } else if (section === 'B') {
      setGameState('sectionC'); // After section B, move to section C
    } else if (section === 'C') {
      setGameState('sectionD'); // After section C, move to section D
    }  
    else {
      setGameState('result'); // After section D, show result screen
    }
  };

  // Restart the game
  const restartGame = () => {
    setGameState('start');
  };

  return (
    <div className="App">
      {gameState === 'start' && <StartScreen startGame={startGame} />}
      {gameState === 'sectionA' && <SectionScreen section="A" startQuiz={() => startQuiz('A')} />}
      {gameState === 'sectionB' && <SectionScreen section="B" startQuiz={() => startQuiz('B')} />}
      {gameState === 'sectionC' && <SectionScreen section="C" startQuiz={() => startQuiz('C')} />}
      {gameState === 'sectionD' && <SectionScreen section="D" startQuiz={() => startQuiz('D')} />}
      
      {/* Quiz A */}
      {gameState === 'quizA' && (
        <Quiz
          endGame={() => endGame('A')}
          incrementScore={() => setScore(score + 1)}
          quizData={quizDataA} // Pass Section A data
        />
      )}
      
      {/* Quiz B */}
      {gameState === 'quizB' && (
        <Quiz
          endGame={() => endGame('B')}
          incrementScore={() => setScore(score + 1)}
          quizData={quizDataB} // Pass Section B data
        />
      )}

      {/* Quiz C */}
      {gameState === 'quizC' && (
        <Quiz
          endGame={() => endGame('C')}
          incrementScore={() => setScore(score + 1)}
          quizData={quizDataC} // Pass Section C data
        />
      )}

      {/* Quiz D */}
      {gameState === 'quizD' && (
        <Quiz
          endGame={() => endGame('D')}
          incrementScore={() => setScore(score + 1)}
          quizData={quizDataD} // Pass Section D data
        />
      )}
      
      {/* Result Screen */}
      {gameState === 'result' && (
        <ResultScreen
          score={score}
          total={quizDataA.length + quizDataB.length+quizDataC.length+quizDataD.length} 
          restartGame={restartGame}
        />
      )}
    </div>
  );
}

export default App;
