import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <Header />
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                    </Routes>
                </div>
              <Footer />
        </Router>
    </div>
    
  );
}

export default App;