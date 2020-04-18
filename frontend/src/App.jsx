import React from "react";
import NotesList from "./components/NotesList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CreateUser from "./components/CreateUser";
import CreateNotes from "./components/CreateNotes";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={NotesList} />
        <Route exact path="/users" component={CreateUser} />
        <Route exact path="/edit/:id" component={CreateNotes} />
        <Route exact path="/create-notes" component={CreateNotes} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
