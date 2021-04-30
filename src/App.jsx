import './App.css';
import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";

export default function App() {
  const [data, setData] = useState([])
  const [q, setQ] = useState("");
  
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <div>filter goes here</div>
          <div>datatable goes here</div>
        </Wrapper>
      </div>
    </Router>
  );
}

// export default App;
