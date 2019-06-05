import React from 'react';
import NavBar from './NavBar.jsx';
import ItemList from './ItemList.jsx';
import InputForm from './InputForm.jsx';

const App = () => (
  <div id = "1">
      <NavBar/>
      <table id = "content" style={{"width": "1180px", "height": "650px"}}>
        <tbody>
          <tr>
            <td style={{"verticalAlign": "0%"}}>
              <br></br>
              <ItemList/>
              <ClearAll/>
            </td>
            <td style={{"verticalAlign": "0%"}}>
              <br></br>
              <InputForm/>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
);

export default App;
