import React from 'react';
import './app.css';
import { AppHeader } from './components/app-header/AppHeader';
import { PostAddForm } from './components/post-add-form/PostAddForm';
import { PostList } from './components/post-list/PostList';
import { PostStatusFilter } from './components/post-status-filter/PostStatusFilter';
import { SearchPanel } from './components/search-panel/search-panel';

export interface Post {
  label: string,
  important: boolean,
}

function App() {

  const lists: Post[] = [
    {label: 'Going to learn React',  important: true},
    {label: 'Good day today',  important: false},
    {label: 'Learn HTML',  important: false},
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className='search-panel d-flex'>
        <SearchPanel />
        <PostStatusFilter />
        
      </div>
      <PostList posts ={lists} />
      <PostAddForm />
    </div>
  );
}

export default App;
