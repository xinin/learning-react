import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyB2eHwqfqxpoMkWP7jIU7fU-Nx6WboI_4A';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
