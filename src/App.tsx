import React from 'react';
import './App.css';
import SearchInput from './component/SearchInput';
import people from './mock-data/person';
import widgets from './mock-data/widget';
import genericSearch from './utils/genericSearch';

function App() {
  const [query, setQuery] = React.useState('');

  return (
    <div className="App">
      <SearchInput setsearchQuery={setQuery} />

      <h1>Widgets:</h1>
      {widgets.filter((widget) => genericSearch(widget, ['title', 'description'], query, false)).map(widget => {
        return (
          <div key={widget.id}>
            <h2>{widget.title}</h2>
          </div>
        );
      })}

      <h1>People:</h1>
      {people.filter((person) => genericSearch(person, ['firstName', 'lastName'], query, false)).map((person, idx) => {
        return (
          <div key={idx}>
            <h2>{person.firstName} - {person.lastName}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
