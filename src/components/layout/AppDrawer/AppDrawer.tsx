import React from 'react';
import { Drawer, Button } from "@material-ui/core";


function MyDrawer({isOpenDrawer, setIsOpenDrawer, buttons}: {isOpenDrawer: boolean; setIsOpenDrawer: Function, buttons: any}) {
    

    return (
        <Drawer color="inherit" anchor={'top'} open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        {buttons}
        </Drawer>
    );
}

export default MyDrawer;
