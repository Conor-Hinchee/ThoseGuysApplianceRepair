import { createStore as reduxCreateStore} from "redux";

const reducer = (state = {
    type: "",
    appliance : [],
    issue : ""
}, action) =>{
    switch(action.type){
        case "ADD_TYPE":
            state ={
                ...state,
                type: action.payload
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
            break;
    }
    return state;
};



const createStore = () => reduxCreateStore(reducer);


export default createStore;
