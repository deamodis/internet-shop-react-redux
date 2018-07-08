import * as R from 'ramda'

import {
    FETCH_CATEGORIES_SUCCESS
} from '../actionsType'

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_CATEGORIES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            console.log('cat suc')
            return R.merge(state, newValues);
        default:
            console.log('default')
            return state
    }
}