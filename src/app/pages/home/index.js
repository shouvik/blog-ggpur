import { html } from 'htm/preact';
import './style.css'

import { blog, blogPost } from '../../components'
import { BLOG_IDS, API_URL } from '../../../constants'

const keys = [1,2,3,4]
const blogs = [{
    introText: "This is a sample text", 
    blogImage: "https://kbob.github.io/images/sample-4.jpg", 
    blogTitle: "This is a sample title.", 
    blogURL: "/post?id=1&title=this%20is%20a%20sample%20blog",
}]

export const view = (state, action) => {
    console.log(state, action)
    return html`
    <div>
        <div class='carousel_container'>
            ${keys.map(
                key => blog(state, action)
            )}
        </div>
        <div>
            ${blogs.map(
                key => blogPost(key, action)
            )}
        </div>
    </div>`;
}

export const state = {
}

export const action = {
    loadBlogs:  () => BLOG_IDS.map(id => 
        new Promise((suc, rej) => fetch(API_URL+id)
        .then(response => response.json())
        .then(data => suc(data))))
}