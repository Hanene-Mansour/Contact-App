import axios from 'axios';
import { contactConstants } from './constantes';


export const listerContacts = () => {


    return async dispatch => {
        dispatch({ type : contactConstants.GET_ALL_CONTACT_REQUEST})

        try {
            const res = await axios.get(`http://127.0.0.1:3000/contact/lister`)
            if(res.status === 200){
                dispatch({ 
                    type : contactConstants.GET_ALL_CONTACT_SUCCESS,
                    payload : { contacts : res.data }
                })
            }
        } catch (error) {
            dispatch({
                type : contactConstants.GET_ALL_CONTACT_FAILURE,
                payload : { error : error.response}
            })
        }
    }

}

export const addContactAction = (data) => {
    return async dispatch => {
        dispatch({ type : contactConstants.ADD_CONTACT_REQUEST})
        try {
            const res = await axios.post(`http://127.0.0.1:3000/contact/ajouter`, data)
            if(res.status === 200){
                dispatch({ 
                    type : contactConstants.ADD_CONTACT_SUCCESS,
                    payload : { AddContactData : res.data }
                })
            }
        } catch (error) {
            dispatch({
                type : contactConstants.ADD_CONTACT_FAILURE,
                payload : { error : error.response}
            })
        }
}
}