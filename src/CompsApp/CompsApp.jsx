import React from 'react';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage'
import ModalPage from './pages/ModalPage';
import Sidebar from './components/Sidebar';
import TablePage from './pages/TablePage';

function CompsApp() {

    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
            </div>
        </div>

    )
}

export default CompsApp;