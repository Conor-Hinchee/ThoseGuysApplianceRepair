import { createStore as reduxCreateStore} from "redux";

const reducer = (state = {
    messageType: "",
    appliance : [],
    issue : ""
}, action) =>{
    switch(action.type){
        case "ADD_MESSAGE_TYPE":
            state ={
                ...state,
                messageType: action.payload
            };
            break;
        case "ADD_APPLIANCE":
            state = {
                ...state,
                appliance: [...state.appliance, action.payload]
            };
            break;
        case "ADD_APPLIANCE_LIST":
                state = {
                    ...state,
                    appliance: action.payload
                };
            break;
        case "UPDATE_ISSUE":
                state = {
                  ...state,
                  issue : action.payload
                };
            break;
          case "CLEAR_STATE":
                state = {
                  appliance : [],
                  issue : "",
                };
            break;   
          default:
            return state;
    }
    return state;
};



const createStore = () => reduxCreateStore(reducer);


export default createStore;
