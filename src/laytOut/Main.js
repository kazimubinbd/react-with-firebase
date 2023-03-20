import React from 'react';
import { Outlet } from 'react-router-dom';
import ManMenu from '../components/ManMenu';

const Main = () => {
    return (
        <div>
            <ManMenu></ManMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;