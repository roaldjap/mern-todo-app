import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr>
      <td>{props.todo.todo_description}</td>
      <td>{props.todo.todo_responsible}</td>
      <td>{props.todo.todo_priority}</td>
      <td>
          <Link to={"/edit/"+props.todo._id}>Edit</Link>
      </td>
  </tr>
)

export default class TodosList extends Component{

  // initialize props
  constructor(props){
    super(props);
    this.state = {todos: []};
  }
  
  componentWillMount(){
    // checks if it can connect to the endpoint
    axios.get('http://localhost:9999/todos')
      .then(response => {
        // update the state
        this.setState({todos: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // This is being called in render() stage
  todoList(){

    // maps out todos that was returned from axios.get
    return this.state.todos.map((currentTodo, i) => {

      // creates a Todo Component where being defined on the props on line 6
      return <Todo todo={currentTodo} key={i} />;
    });

  }

  render(){
    return(
      <div>
        <h3>Todos List</h3>
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Description</th>
                      <th>Responsible</th>
                      <th>Priority</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  { this.todoList() }
              </tbody>
          </table>
      </div>
    )
  }
}