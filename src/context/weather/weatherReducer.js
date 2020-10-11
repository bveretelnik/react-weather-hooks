import {SHOW_LOADER, GET_WEATHER,HIDE_LOADER} from '../type'

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [GET_WEATHER]: (state,{payload}) => ({...state, weather: payload, loading: false}),
    [HIDE_LOADER]: (state,{payload}) => ({...state, weather: payload, loading: false}),
    DEFAULT: state => state
}

export const weatherReducer = (state,action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state,action)
}