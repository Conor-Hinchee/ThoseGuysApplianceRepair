import { createStore as reduxCreateStore} from "redux";

const reducer = (state = {
    appliance : [],
    issue : "",
    contactInfo : {
      first_name: "",
      last_name: "",
      phone_number: "",
      address: ""
    }
}, action) =>{
    switch(action.type){
        case "ADD_APPLIANCE":
            state = {
                ...state,
                appliance: [...state.appliance, action.payload]
            };
            break;
        case "REMOVE_APPLIANCE":
                let newArr = [];
                for(let i = 0; i < state.appliance.length; i++){
                  if(state.appliance[i] !== action.payload){
                    newArr.push(state.appliance[i]);
                  }
                }
          
                state = {
                    ...state,
                    appliance: newArr
                };
            break;
        case "UPDATE_ISSUE":
                state = {
                  ...state,
                  issue : action.payload
                };
            break;
        case "UPDATE_FIRST_NAME":
                state = {
                  ...state,
                  contactInfo: {
                    ...state.contactInfo,
                    first_name: action.payload
                  }
                };
            break;
        case "UPDATE_LAST_NAME":
                state = {
                  ...state,
                  contactInfo: {
                    ...state.contactInfo,
                    last_name: action.payload
                  }
                };
            break;
        case "UPDATE_PHONE_NUMBER":
                state = {
                  ...state,
                  contactInfo: {
                    ...state.contactInfo,
                    phone_number: action.payload
                  }
                };
            break;
         case "UPDATE_ADDRESS":
                state = {
                  ...state,
                  contactInfo: {
                    ...state.contactInfo,
                    address: action.payload
                  }
                };
            break;    
          default:
            break;
    }
    return state;
};



const createStore = () => reduxCreateStore(reducer);


export default createStore;
