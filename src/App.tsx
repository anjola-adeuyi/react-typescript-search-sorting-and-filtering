import React from 'react';
import './App.css';
import people from './mock-data/person';
import widgets from './mock-data/widget';
import genericSearch from './utils/genericSearch';

function App() {
  const query = 'empty';
  return (
    <div className="App">
      <h1>Widgets:</h1>
      {widgets.filter((widget) => genericSearch(widget, ['title', 'description'], query, false)).map(widget => {
        return (
          <div key={widget.id}>
            <h2>{widget.title}</h2>
            {/* <p>{widget.description}</p> */}
          </div>
        );
      })}
      <h1>People:</h1>
      {people.filter((person) => genericSearch(person, ['birthday'], query, false)).map(person => {
        return (
          <div key={person.eyeColor}>
            <h2>{person.firstName} - {person.lastName}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
