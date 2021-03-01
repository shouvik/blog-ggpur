import { curry } from 'ramda'
import { render } from 'preact'

const resolveRoute = (route, pages, state, action) => {
    try {
    console.log(route, state[route], action[route])
     return {
        view: pages[route],
        state: state[route] || {},
        action: action[route]
     };
    } catch (error) {
        throw new Error("The route is not defined");
    }
}

const router = (_, pages, state, action) => {
    const url = window.location.pathname.slice(1).slice(0, -1) || "home";
    return resolveRoute(url, pages, state, action);
};

export const renderer = curry(async (pages, _state, _action, event) => {
    const { view, state  = {}, action = {} } = router(event, pages, _state, _action);
    render(view(state, action), document.body)
})