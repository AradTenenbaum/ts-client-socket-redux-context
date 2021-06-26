import React, { useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import SnackBar from '../../components/shared/SnackBar/SnackBar';
import { TemplateContext } from '../../context/TemplateContext';
import { updateTemplate } from '../../redux/actions/templateActions';

const Home = () => {
    const context = useContext(TemplateContext);
    const template = useSelector((state: any) => state.templateReducer);
    const dispatch = useDispatch();

    const updateReactContext = (value: any) => {
        context.updateTemplate({template: "new context"})
    }

    const updateReduxContext = (value: any) => {
        dispatch(updateTemplate({template: "new redux"}));
    }

    const [open, setOpen] = useState<boolean>(true);

    return (
        <div>
            <SnackBar open={open} setOpen={setOpen} severity={"success"} text="Welcome to home page"/>
        </div>
    )
}

export default Home
