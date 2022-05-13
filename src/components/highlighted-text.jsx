
const HighlightedText = ({ text, toHighlight }) => {
  const ltext = text.toLowerCase();
  const indexOfLetters = ltext.indexOf(toHighlight);
  return (
    <div>
    {
      text.split('').map((letter, index) => {
        if (index >= indexOfLetters && index <= indexOfLetters + toHighlight.length - 1) {
          return <span className='text-danger'>{letter}</span>
        } else {
          return letter;
        }
      })
    }
    </div>
  );
};

export default HighlightedText;
