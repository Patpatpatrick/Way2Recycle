import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Nav from './Nav.js';
import Categories from "./Categories";
import List from "./List";

const App = () => (
    <div>
        <Nav/>
        <Categories categories={['Car', 'Rental', 'Textbook', 'Computer']}/>
        <List/>
    </div>
);

export default App;
