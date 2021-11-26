import "./App.css";
import { useState } from "react";
import ContactManager from "./components/ContactManager/ContactManager";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
function App() {
  return (
    <div className="App">
      <ContactManager />
    </div>
  );
}

export default App;
