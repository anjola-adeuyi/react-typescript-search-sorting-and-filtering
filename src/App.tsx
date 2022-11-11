import React from 'react';
import './App.css';
import widgets from './mock-data/widget';

function App() {
  return (
    <div className="App">
      {widgets.map(widget => {
        return (
          <div key={widget.id}>
            <h2>{widget.title}</h2>
            <p>{widget.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
