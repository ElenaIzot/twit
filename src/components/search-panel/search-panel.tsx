import React from 'react';
import './SearchPanel.css';

export function SearchPanel() {
    return (
      <input
        className='form-control search-input'
        type='text'
        placeholder='Поиск по записям'
      />
    );
  }
