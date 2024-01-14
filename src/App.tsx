import React from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import "./App.css";

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Editor />
    </div>
  );
}
