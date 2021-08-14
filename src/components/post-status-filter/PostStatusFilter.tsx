import React from 'react';
import './PostStatusFilter.css';

export function PostStatusFilter(): JSX.Element{
    return (
      <div className="btn-group">
        <button type='button' className='btn btn-info'>Все</button>
        <button type='button' className='btn btn-outline-secondary'>
          Понравилось
        </button>
      </div>
    );
}