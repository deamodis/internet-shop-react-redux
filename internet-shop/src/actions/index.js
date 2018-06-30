import {
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAIL
} from "../actionsType";
import {fetchPhones as fetchPhonesApi} from '../api/index'

export const fetchPhones = () => async dispatch => {
    dispatch({type: FETCH_PHONES_START});

    try{
        const phones = await fetchPhonesApi();
        dispatch({
            type:FETCH_PHONES_SUCCESS, payload: phones
        });
    }catch (err){
        dispatch({type:FETCH_PHONES_FAIL, payload: err, error: true})
    }

};