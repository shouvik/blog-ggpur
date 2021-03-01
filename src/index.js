import { renderer } from './route' 
import { views, state, actions } from './app'

const view = renderer(views, state, actions);

window.addEventListener('load', view);
window.addEventListener('hashchange', view);