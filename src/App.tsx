import React from "react";
import Header from "./containers/Header";
import Editor from "./containers/Editor";
import "./App.css";

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Editor />
    </div>
  );
}
