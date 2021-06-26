import { createContext, useReducer } from "react";


const initialState = {
    template: {}
};

const TemplateContext = createContext({
    template: {},
    updateTemplate: (newTemplate: any) => {}
});

function templateReducer(state: any, action: {type: any, payload: any}){
    switch(action.type){
        case 'UPDATE':
            return action.payload
        default:
            return state;
    }
}

function TemplateProvider(props: any) {
    const [state, dispatch] = useReducer(templateReducer, initialState);
    
    async function updateTemplate(template: any){
        try {
            dispatch({
                type: 'UPDATE',
                payload: template
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    
    return (
        <TemplateContext.Provider
        value={{template: state.template, updateTemplate}}
        {...props}
        />
    )
}

export {TemplateContext, TemplateProvider};