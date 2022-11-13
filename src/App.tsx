import React from 'react';
import './App.css';
import PeopleRender from './component/renders/PeopleRender';
import WidgetRender from './component/renders/WidgetRender';
import SearchInput from './component/SearchInput';
import Sorters from './component/Sorters';
import IPerson from './interfaces/IPerson';
import IProperty from './interfaces/IProperty';
import IWidget from './interfaces/IWidget';
import people from './mock-data/person';
import widgets from './mock-data/widget';
import genericSearch from './utils/genericSearch';
import genericSort from './utils/genericSort';

function App() {
  const [query, setQuery] = React.useState('');
  const [widgetSortProperty, setWidgetSortProperty] = React.useState<IProperty<IWidget>>({ property: 'description' });
  const [personSortProperty, setPersonSortProperty] = React.useState<IProperty<IPerson>>({ property: 'firstName' });

  const getWidgetFilter = widgets.filter((widget) => genericSearch(widget, ['title', 'description'], query, false));
  const getPeopleFilter = people.filter((person) => genericSearch(person, ['firstName', 'lastName'], query, false));

  const getWidgetSort = getWidgetFilter.sort((a, b) => genericSort(a, b, widgetSortProperty.property, 'asc'));
  const getPeopleSort = getPeopleFilter.sort((a, b) => genericSort(a, b, personSortProperty.property, 'asc'));

  return (
    <div className="App row m-4">
      <SearchInput
        setsearchQuery={(query) => {
          console.log('setting!!!');
          setQuery(query);
        }}
      />

      <h1>Widgets:</h1>
      <Sorters
        obj={widgets[0]}
        setProperty={(property) => setWidgetSortProperty({ property })}
      />
      {getWidgetSort.length === 0 ? (
        <h5>Sorry... could not find any match under widget category</h5>
      ) : (
        getWidgetSort.map((widget) => {
          return (
            <WidgetRender
              key={widget.id}
              {...widget}
            />
          );
        })
      )}

      <h1>People:</h1>
      <Sorters
        obj={people[0]}
        setProperty={(property) => setPersonSortProperty({ property })}
      />
      {getPeopleSort.length === 0 ? (
        <h5>Sorry... could not find any match under people category</h5>
      ) : (
        getPeopleSort.map((person, idx) => {
          return (
            <PeopleRender
              key={idx}
              {...person}
            />
            // <ul
            //   className="list-group col-4 justify-content-center"
            //   key={idx}
            // >
            //   <li className="list-group-item m-1">
            //     {person.firstName} - {person.lastName}
            //   </li>
            // </ul>
          );
        })
      )}
    </div>
  );
}

export default App;
