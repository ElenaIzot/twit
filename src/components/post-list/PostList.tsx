import React from "react";
import { Post } from "../../App";
import PostListItem from "../post-list-item/PostListItem";
import "./PostList.css";

export function PostList(props: { posts: Post[] }): JSX.Element {

    const elements = posts.map((item: Post) => {
        // Простой способ проверки на объект + содержится ли в нем информация
        if (typeof item === 'object' && isEmpty(item)) {
            const { id, ...itemProps } = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps} />
                </li>
            )
        }
    })

    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}