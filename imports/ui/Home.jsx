import React, { Component } from 'react';
import Categories from "./Categories";
import List from "./List";

export default class Home extends Component {

  render() {
    return (
      <div>
        <Categories categories={['Car', 'Rental', 'Textbook', 'Computer']}/>
        <List/>
      </div>
    );
  }
  
}