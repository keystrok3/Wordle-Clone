
// Compares the letters of a word with a set of characters
// of similar length and returns another list with
// 'green' if the corresponding letter in the attempt set
// matches the word, 'yellow' if not but letter is in the word,
// and 'grey' if letter is not in the word
const changeColour = (correct_word, attempt) => {

    if(attempt.length === 0) return;

    let word = correct_word.split('');

    return attempt.map((char, index) => {
        if(char === word[index]) {
            return 'green';
        }
        else if(word.includes(char)) {
            return '#e4e400';
        }
        else if(word.includes(char) === false) {
            return 'grey'
        }
    });
};


export default changeColour;