import React, {Component} from 'react';
// import List from "./PostAdPortalSubComponent/List";
import ItemList from './PostAdPortalSubComponent/ItemsBox';
import InputForm from './PostAdPortalSubComponent/InputForm';
import ClearAll from './PostAdPortalSubComponent/ClearAll';

class PostAdPortal extends Component {
  
    render() {
        return (
            <div className="PostAd">
              <table id = "content" style={{"width": "1180px", "height": "650px"}}>
                <tbody>
                  <tr>
                    <td style={{"width": "900px", "verticalAlign": "0%"}}>
                      <br></br>
                      <ItemList/>
                      <ClearAll/>
                    </td>
                    <td style={{"width": "280px","verticalAlign": "0%"}}>
                      <br></br>
                      <InputForm/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
    }
  
    
}
export default PostAdPortal;