import React from "react";
import { Post } from "../../App";
import PostListItem from "../post-list-item/PostListItem";
import "./PostList.css";

export function PostList(props: { posts: Post[] }): JSX.Element {
    const elements = props.posts.map((item: Post, id: number) => {
        return (
            <li className='list-group-item' key={id}>
                <PostListItem />
            </li>
        )
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}