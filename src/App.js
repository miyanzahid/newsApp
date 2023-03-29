
import './App.css';
import React, { Component } from 'react'
import Navebar from './components/Navebar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default class App extends Component {
  setpage = 6;
  country= 'in';
  render() {
    return (
      <div>
      <Router>
      <Navebar/>
      <Routes>
        <Route exact path="/" element={<News key='general' pageSize={this.setpage} country={this.country} category="general"/>}></Route> 
        <Route exact path="/business" element={<News key='business' pageSize={this.setpage} country={this.country} category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News key='entertainment' pageSize={this.setpage} country={this.country} category="entertainment"/>}></Route>
        <Route exact path="/health" element={<News key='health' pageSize={this.setpage} country={this.country} category="health"/>}></Route>
        <Route exact path="/science" element={<News key='science' pageSize={this.setpage} country={this.country} category="science"/>}></Route>
        <Route exact path="/sports" element={<News key='sports' pageSize={this.setpage} country={this.country} category="sports"/>}></Route>
        <Route exact path="/technology" element={<News key='technology' pageSize={this.setpage} country={this.country} category="technology"/>}></Route>      
        </Routes>
    </Router>
      </div>
    )
  }
}
