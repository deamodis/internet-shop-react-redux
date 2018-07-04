import {
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAIL,
    LOAD_MORE_PHONES_START,
    LOAD_MORE_PHONES_SUCCESS,
    LOAD_MORE_PHONES_FAIL
} from "../actionsType";
import {getRenderedPhonesLength} from '../selectors'

import {fetchPhones as fetchPhonesApi,
        loadMorePhones as loadMorePhonesApi}
from '../api/index'



export const fetchPhones = () => async dispatch => {
    dispatch({type: FETCH_PHONES_START});
    try{
        const phones = await fetchPhonesApi();
        dispatch({
            type: FETCH_PHONES_SUCCESS, payload: phones
        });
    }catch (err){
        dispatch( {type:FETCH_PHONES_FAIL, payload: err, error: true} );
    }
};



export const loadMorePhones = () => async (dispatch, getState) => {
    const offset = getRenderedPhonesLength(getState());

    dispatch({type: LOAD_MORE_PHONES_START});

    try{

        const phones = await loadMorePhonesApi({offset});
        console.log(phones);
        dispatch({
            type: LOAD_MORE_PHONES_SUCCESS, payload: phones
        });
    }catch (err){
        dispatch( {type:LOAD_MORE_PHONES_FAIL, payload: err, error: true} );
    }
};