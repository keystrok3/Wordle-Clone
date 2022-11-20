

const changeColour = (correct_word, attempt) => {
    let word = correct_word.split('');
    const colourPalette = [];

    return attempt.map((char, index) => {
        if(char === word[index]) {
            colourPalette[index] = 'G';
        }
        else if(word.includes(char)) {
            colourPalette[index] = 'Y';
        }
        else if(!word.includes(char)) {
            // colourPalette[index] = 
        }
    });
}