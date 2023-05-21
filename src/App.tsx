import React from "react";

import "./App.css";

import { Card } from "../src/components/Card";

function App() {
  return (
    <>
      <div className="cards">
        <Card cardTitle="Test" dynamicClass="" variant="sm">
          <div>
            <span>hello world</span>
          </div>
        </Card>
        <Card cardTitle="Test" dynamicClass="" variant="sm">
          <div>
            <span>hello world</span>
          </div>
        </Card>
        <Card cardTitle="Test" dynamicClass="" variant="sm">
          <div>
            <span>hello world</span>
          </div>
        </Card>
        <Card cardTitle="Test" dynamicClass="" variant="hmd">
          <div>
            <span>hello world</span>
          </div>
        </Card>
        <Card cardTitle="Test" dynamicClass="" variant="sm">
          <div>
            <span>hello world</span>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
