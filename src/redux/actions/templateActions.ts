import { UPDATE } from "../actionTypes/templateActionTypes";

export const updateTemplate = (template: any) => (dispatch: any) => {
    dispatch({type: UPDATE, payload: template});
}