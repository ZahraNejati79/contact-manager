import "./App.css";
import { Component, useState } from "react";
import ContactManager from "./components/ContactManager/ContactManager";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <main className="App">
      <ContactManager />
    </main>
  );
}

export default App;
