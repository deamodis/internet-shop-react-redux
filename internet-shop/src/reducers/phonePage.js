import * as R from "ramda"

import {
    FETCH_PHONE_BY_ID_SUCCESS
} from "../actionsType";

const initialState = {
    id: null
};

export default (state = initialState,{type, payload}) =>{
    switch (type){
        case FETCH_PHONE_BY_ID_SUCCESS: // я достал телефон, но из payloada закидываю не телефон, а айдишник??
            return R.merge(state, {
                id: R.prop('id', payload)
            });
        default:
            return state
    }
}

// что лучше, хранить объект, который мы зафетчили, в сторе, или же хранить его айдишник, но потом нам нужно будет его отрисовать(т.е найти для начала)