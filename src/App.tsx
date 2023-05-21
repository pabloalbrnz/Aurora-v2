import React from "react";

import "./App.css";

import { Card } from "../src/components/Card";

import { useApp } from "./useApp";

function App() {
  const { actions, states } = useApp();
  return (
    <>
      <Card>
        <div>
          <span>{import.meta.env.VITE_API_PERSONAL_KEY}</span>
        </div>
      </Card>
    </>
  );
}

export default App;
