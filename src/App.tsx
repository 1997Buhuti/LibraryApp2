import React from 'react';
import "./App.scss"
import Library from "./Components/Library";
import {DefaultRootState, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import { actionCreators } from './State';
import {addAuthor} from "./State/action-creators";
import {Row} from "react-bootstrap";

function App() {
  const dispatch=useDispatch();
  const {addAuthor}=bindActionCreators(actionCreators,dispatch);
  const Authors:DefaultRootState=useSelector((state)=>state)
  return (
      <div className="App">
        {/*<Library Authors={Authors}/>*/}
        <h1>Authors{Authors}</h1>
      </div>
  );
}

export default App;
