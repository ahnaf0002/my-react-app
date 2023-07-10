import React, { useState } from 'react';

const Content = () => {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(text);
  };

  return (
    <section>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      ></textarea>
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayedText}</p>
    </section>
  );
};

export default Content;
