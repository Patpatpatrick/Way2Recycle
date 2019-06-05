import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Nav from './Nav';
import Categories from "./Categories";
import List from "./List";
import PostAdPortal from './PostAdPortal.jsx';
import './style/style.css';

// import './style/style.css'
const App = () => (
    <div>
        <Nav/>
        <Categories categories={['Car', 'Rental', 'Textbook', 'Computer']}/>
        <List/>
        <PostAdPortal/>
    </div>
        );

        export default App;
