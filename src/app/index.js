import { html } from 'htm/preact';
import { curry } from 'ramda'

import { view as home, state as homeState, action as homeAction } from './pages/home'
import { view as post, state as postState, action as postAction } from './pages/post'

import { header as Header} from './components/static/header'

const app = curry((children, state, action) => {
    return html`
    <div>
        ${Header(state, action)}
        ${children(state, action)}
    </div>`;
})

export const views = {
    home: app(home),
    post: app(post)
}

export const state = {
    home: homeState,
    post: postState
}

export const actions = {
    home: homeAction,
    post: postAction
}