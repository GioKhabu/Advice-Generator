import React from 'react';
import './App.css';

import dice from '../../assets/dice.svg';

function App() {
  const [data, setData] = React.useState('');
  React.useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <main className="App-header">
        <h1>ADVICE # {data && data?.slip.id}</h1>
        <p>{`“${data && data?.slip.advice}”`}</p>
        <div className="line-button-wrapper">
          <div className="lines-wrapper">
            <div className="horizontal"></div>
            <div className="vertical left"></div>
            <div className="vertical right"></div>
            <div className="horizontal"></div>
          </div>
          <button
            onClick={() => {
              fetch('https://api.adviceslip.com/advice')
                .then((response) => response.json())
                .then((data) => setData(data));
            }}
          >
            <img src={dice} alt="dice" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
