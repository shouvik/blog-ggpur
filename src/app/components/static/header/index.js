import { html } from 'htm/preact';
import './style.css';

export const header = () => {
    return html`
        <div class='header__container'>
            <div class='header__corner'></div>
            <div class='header__title'>
                <div class='header__title_main'>Shouvik's Engineering blog</div>
                <code class='header__title_sub'>Software Engineering and Product Manager. I believe in "fail fast" </code>
            </div>
            <div class='header__nav'></div>
        </div>`
}  