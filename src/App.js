import { React, useState } from "react";
import NavigationBar from "./NavigationBar";
import { Row, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Accordion from './AccordionComponent'; 
import FaqData from './Components/ListData.json'
import "./App.css";
import SearchBar from "./Components/SearchBar";
function App() {
  

  return (
    <body>
    <div className="main">
      <Container fluid>
        <Row>
          <NavigationBar></NavigationBar>
        </Row>
      </Container>
      <SearchBar placeholder="Enter Query" data={FaqData} />
      <br/>
      <div className="freq"> Frequently Asked Questions</div>
      <h2>Everything you need to know</h2>
      <br/>
      <div class="row pt-48">
        <div class=" col-lg-9 mx-auto py- cc-ul-list-box">
      <ul className ="nav nav-pills justify-content-center mb-3 mt-1" id="pills-tab" role="tablist">
          <li class ="nav-item" role="presentation">
            <button class="nav-link">About</button>
          </li>
          <li class ="nav-item" role="presentation">
            <button class="nav-link">Billing</button>
          </li>
          <li class ="nav-item" role="presentation">
            <button class="nav-link">Account</button>
          </li>
          <li class ="nav-item" role="presentation">
            <button class="nav-link">Shoot</button>
          </li>
      </ul>
      </div> 
    </div>
    <Accordion/>
    </div>
  </body>
  );
}

export default App;