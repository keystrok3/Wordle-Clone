
/**
 * 5x6 board displaying the wordle word game attempts
*/


const WordleBoard = ({ board }) => {
    
    return (
      <>
      <table>
            <thead></thead>
            <tbody>
            {
                board.map((word, i) => {
                    return <WordleRow word={word} key={i} />
                })
            }
            </tbody>
      </table>
    </>
    );
  };


const WordleRow = ({ word }) => {
    
    return (
        <tr>
            {
                word.map((data, j) => {
                    return (
                        <td style={
                            { 
                                backgroundColor: data.color,
                                borderColor: data.color
                            }

                            } key={j}>
                            { data.letter }
                        </td>
                    )
                })
            }
        </tr>
    );
};

export default WordleBoard;