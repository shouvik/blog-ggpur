import { html } from 'htm/preact';
import './style.css';

export const blog = (state, action) => {
    return html`
        <div class='blog_card'>
            <img src='https://static.toiimg.com/thumb/resizemode-4,width-300,height-200,msid-81063149/81063149.jpg?imgsize=209298'></img>
            <h1>Blog Card</h1>
        </div>`
}  