import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const countWords = () => {
    const trimmedText = text.trim();
    if (trimmedText === '') {
      return 0;
    }
    return trimmedText.split(/\s+/).length;
  };

  return (
    <div className='container'>
      <h1 className='Heading'>Responsive Paragraph Word Counter</h1>
      {/* using bootstrap css framework */}
      <textarea
        className='input-field'  
        rows={10}
        cols={50}
        value={text}
        onChange={handleTextChange}
        placeholder="Enter Words Here"
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
}

export default App;

