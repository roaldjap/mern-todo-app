import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import ListIcon from "react-ionicons/lib/IosList";
import Logo from "react-ionicons/lib/LogoApple";


import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="http://localhost:3000" className="navbrand-brand" height="30" width="30">
            <Logo/>
          </a>
          <Link to="/" className="navbar-brand" >Todo App</Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <ListIcon/>
          </button>

          <div className="collapse navbar-collapse"  id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/create" className="nav-link" >Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div className="row">

          <div className="col-12 m-5">
            <Route path="/" exact component={TodosList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />
          </div>

          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
