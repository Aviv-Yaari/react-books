const LongTxt = ({ text, isLongTxtShown, toggleLongTxt }) => {
  return (
    <p>
      {isLongTxtShown || text.length < 100 ? text : text.substring(0, 96) + '...'}
      {text.length > 100 && (
        <button onClick={toggleLongTxt}>{isLongTxtShown ? 'Read Less' : 'Read More'}</button>
      )}
    </p>
  );
};

export default LongTxt;
