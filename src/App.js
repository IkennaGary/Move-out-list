import React from "react";
import Header from "./components/Header";
import "./index.css";
import Table from "./services/Table";

const app = () => {
  return (
    <main className="main">
      <Header />
      <Table />
    </main>
  );
};

export default app;
