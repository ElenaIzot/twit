import React from 'react';
import { Component } from 'react';
import { Post } from '../../App';
import "./PostListItem.css";
interface State {
    label: string,
    important: boolean,
    like: boolean,
}

export default class PostListItem extends React.Component {
    constructor({ label, important }: Post) {
        super({ label, important });
        this.state = {
            label: '',
            important: false,
            like: false,
        };

        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant(): void {
        this.setState({important: true })
        // this.setState(({ important }) => ({
        //     important: !important
        // }))
    }

    onLike(): void {
        this.setState({like: true})
        // this.setState(({ like }) => ({
        //     like: !like
        // }))
    }

    render() {
        const { label } = this.props;
        const { important, like } = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return <div className={classNames}>
            <span className='app-list-item-label'
                onClick={this.onLike}>
                {label}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    type='button'
                    className='btn-star btn-sm'
                    onClick={this.onImportant}>
                    <i className='fa fa-star'></i>
                </button>
                <button
                    type='button'
                    className='btn-trash btn-sm'>
                    <i className='fa fa-trash'></i>
                </button>
                <i className='fa fa-heart'></i>
            </div>
        </div>
    }
}