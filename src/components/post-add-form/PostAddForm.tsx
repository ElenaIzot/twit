import React from 'react';
import './PostAddForm.css'

export function PostAddForm(){
    return (
        <form className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='О чем вы сейчас демаете?'
                className='form-control new-post-label'
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'>
                Добавить
            </button>

        </form>
    )
}