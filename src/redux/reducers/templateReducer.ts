import { UPDATE } from "../actionTypes/templateActionTypes";

const reducer = (state: any = null, action: { type: any; payload: any }) => {
    switch(action.type) {
        case UPDATE:
            return action.payload
        default:
            return state;
    }
}

export default reducer;