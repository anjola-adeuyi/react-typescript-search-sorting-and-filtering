import React from 'react';
import './App.css';
import SearchInput from './component/SearchInput';
import people from './mock-data/person';
import widgets from './mock-data/widget';
import genericSearch from './utils/genericSearch';

function App() {
  const [query, setQuery] = React.useState('');

  const getWidgetFilter = widgets.filter((widget) => genericSearch(widget, ['title', 'description'], query, false));
  const getPeopleFilter = people.filter((person) => genericSearch(person, ['firstName', 'lastName'], query, false));

  return (
    <div className="App row m-4">
      <SearchInput setsearchQuery={(query) => {
        console.log('setting!!!');
        setQuery(query);
      }} />

      <h1>Widgets:</h1>
      {getWidgetFilter.length === 0 ?  (<h5>Sorry... could not find any match under widget category</h5>) : (getWidgetFilter.map(widget => {
        return (
          <ul className='list-group col-4 justify-content-center' key={widget.id}>
            <li className='list-group-item m-1'>{widget.title}</li>
          </ul>
        );
      }) ) }

      <h1>People:</h1>
      {getPeopleFilter.length === 0 ? (<h5>Sorry... could not find any match under people category</h5>) : (getPeopleFilter.map((person, idx) => {
        return (
          <ul className='list-group col-4 justify-content-center' key={idx}>
            <li className='list-group-item m-1'>{person.firstName} - {person.lastName}</li>
          </ul>
        );
      })
      )}
    </div>
  );
}

export default App;
