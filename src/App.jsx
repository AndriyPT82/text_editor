import React, { useState, useEffect } from 'react';

import { TextField } from './components/TextField';
import { Controlers } from "./components/Controlers";
import './App.scss';

function App() {

  const [styles, setStyles] = useState({});

  const handleConrtolers = (event) => {
    const { name, value } = event.target;

    setStyles(state => {
      return { ...state, [name]: name === 'font-size' ? `${value}px` : value }
    })
  }

  const handleStyles = () => {
    return Object.keys(styles).reduce((str, name) => {
      return str += `${name}: ${styles[name]}; `;
    }, '');
  }

  useEffect(() => {

    if (!Object.keys(styles).length || window.getSelection().isCollapsed) return;

    const range = window.getSelection().getRangeAt(0);
    const span = document.createElement('span');

    console.log(range);
    console.log(window.getSelection());
    console.log(window.getSelection().anchorNode);

    const { startOffset: start, endOffset: end } = range;
    if (range.commonAncestorContainer.length === end - start) {

      const clonSpan = span.cloneNode(true);
      clonSpan.style = handleStyles()

      clonSpan.innerText = range.extractContents().textContent;
      range.insertNode(clonSpan)
      return;
    }

    span.style = handleStyles()

    const clonSpan = span.cloneNode(true);
    clonSpan.innerText = range.extractContents().textContent;
    range.insertNode(clonSpan)

  }, [styles])

  return (
    <div className="App">
      <div className="container">

        <TextField 
          onSetStyles={setStyles}
        />
        <Controlers
          onSetStyle={handleConrtolers}
        />
      </div>
    </div>
  );
}

export default App;
