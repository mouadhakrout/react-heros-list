import * as types from './actionTypes';
const credentials = require('../components/shared/credentials');
export function receiveHeros(data) {
    return {type: types.RECEIVE_HEROS, heros: data};
}
export function fetchHeros() {
    return dispatch => {
        $.getJSON(credentials.url, {
            ts: credentials.ts,
            apikey: credentials.PUBLIC_KEY,
            hash: credentials.hash,
        })
            .done(function(response) {
                dispatch(receiveHeros(response.data.results))
            })
            .fail(function(err){
                // error logs
                console.log(err);
            });
    };
}