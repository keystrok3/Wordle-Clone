import { useEffect, useRef, useState } from "react";

const wordList = [
    'PLACE', 'SPECK', 'TREND', 'PAINT', 'LOFTY', 'BRAKE', 'TRAIL', 'GROAN', 'HEFTY'
];

const todaysWord = wordList[0];

const WordleBoard = () => {

    const boardArray = [
        new Array(5).fill(''),
        new Array(5).fill(''),
        new Array(5).fill(''),
        new Array(5).fill(''),
        new Array(5).fill(''),
        new Array(5).fill('')
    ];

    const [ board, setBoard ] = useState(boardArray);

    let attempts = useRef(0)
    let current_letter = useRef(0);

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            event.preventDefault();

            if(event.key === 'Enter' && current_letter.current > 4) {
                current_letter.current = 0;
            } 
            else if(event.key === 'Backspace' && current_letter.current >= 0) {
                board[attempts.current][current_letter.current] = "";
                setBoard(board => [ ...board]);
                current_letter.current -= 1;
                
                if(current_letter.current < 0) current_letter.current = 0;
            }
            else if(parseInt(event.code) >= 65 && parseInt(event.code) <= 90 && current_letter.current <= 4) {
                board[attempts.current][current_letter.current] = event.key.toUpperCase()

                setBoard(board => [ ...board ])
                current_letter.current += 1;
                if(current_letter.current > 4) {
                    attempts.current += 1;
                }
            }

        });
    }, []);
    
    return (
      <>
      <table>
            <thead></thead>
            <tbody>
            {
                board.map((word, i) => {
                    return (
                        <tr key={i}>
                            {
                                word.map((letter, j) => {
                                    return <td key={j}>{letter}</td>
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
      </table>
    </>
    );
  };

export default WordleBoard;