import { html } from 'htm/preact';
import './style.css';

export const blogPost = (state, action) => {
    const {
        introText, blogImage, blogTitle, blogURL
    } = state;
    console.log(state)
    return html`
    <div>
        <div class="wrapper">
            <div class="extract">
                <a href="${blogURL}">
                    <img src="${blogImage}" class="blog_post_image" alt="" />
                        ${blogTitle}
                </a>
                <p class="nut">${introText}</p>
            </div>
        </div>
    </div>
    `
}