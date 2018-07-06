import * as R from 'ramda'

import {ADD_PHONE_TO_BASKET} from "../actionsType";

import {
    addPhoneToBasket
} from "../actions";


const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_PHONE_TO_BASKET:
            return R.append(payload, state);

        default:
            return state;
    }
}