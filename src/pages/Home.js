import React, { Component } from "react";
import Container from "../components/Container";
import Table from "../components/Table";

function Home() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <h1 className="text-center">Welcome to your Employee Directory!</h1>

        <h3 className="text-center">
          Click the button below to get a table of your employees!
        </h3>

        <br />

        <center>
          <button type="button" className="btn btn-success">
            Generate Table
          </button>

          <br />
          <br />

          <Table />
        </center>
      </Container>
    </div>
  );
}

export default Home;
