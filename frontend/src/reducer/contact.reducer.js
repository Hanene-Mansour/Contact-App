import { contactConstants } from "../actions/constantes";

const initialState = {
    contacts : [],
    error : null,
    createdContact : []
}

export default ( state = initialState , action ) => {
    switch(action.type){
        //Get ALL CONTACT 
        case contactConstants.GET_ALL_CONTACT_REQUEST :
            state = { 
                ...state
            }
            break;
        case contactConstants.GET_ALL_CONTACT_SUCCESS :
            state = {
                ...state, 
                contacts : action.payload.contacts
            }
            break;
        case contactConstants.GET_ALL_CONTACT_FAILURE :
            state = {
                ...state,
                error : action .payload.error
            }
            break;
            //ADD NEW CONTACT
        case contactConstants.ADD_CONTACT_REQUEST :
            state = {
                ...state
            }
            break;
        case contactConstants.ADD_CONTACT_SUCCESS :
            state = {
                ... state,
                createdContact : action.payload.AddContactData
            }
            break;
            case contactConstants.ADD_CONTACT_FAILURE :
                state = {
                    ...state,
                    error : action .payload.error
                }
            break;



            default :
            console.log('default action')

    }
    return state;
}