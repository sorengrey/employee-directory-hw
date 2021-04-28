import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <h1 className="text-center">Welcome to Employee Directory!</h1>
          <h3 className="text-center">Click the button below to get a table of your employees!</h3>
          <button type="button" className="btn btn-success">Generate Table</button>
        </Container>
      </div>
          )}

export default Home;