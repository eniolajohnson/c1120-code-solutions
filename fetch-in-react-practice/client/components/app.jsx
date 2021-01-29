import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {

    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */

    fetch('/api/todos')
      .then(response => response.json())
      .then(todos => this.setState({
        todos
      }))
      .catch(error => console.error('Fetch failed!', error));
  }

  addTodo(newTodo) {
  /**
* Use fetch to send a POST request to `/api/todos`.
* Then 😉, once the response JSON is received and parsed,
* add the created todo to the state array.
*
* TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
* and specify the "Content-Type" header as "application/json"
*/
  fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  })
    .then(response => response.json())
    .then(todo => todo)
    .catch(error => console.error('Fetch failed!', error));
  }

  // toggleCompleted(todoId) {
    // let newTodo = []
    // fetch(`/api/todos/${todoId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ isCompleted: !this.state.todos[todoId] })
    // })
    //   .then(response => response.json())
    //   .then(todo => {
    //       this.setState({
    //         todos: this.state.todos.map(todoState => {
    //           return todo.todoId === todoState.todoId
    //             ? todo : todoState
    //         }) })
    //   })
  // }

  //   fetch('/api/todos', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newTodo)
  //   })
  //     .then(response => response.json())
  //     .then(todo => todo)
  //     .catch(error => console.error('Fetch failed!', error));
  // }

  // toggleCompleted(todoId) {
  //   fetch(`/api/todos/${todoId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.state.todos[todoId])
  //   })
  //     .then(response => response.json())
  //     .then(todo => this.setState({
  //       todo: this.state.todos[!todo.isCompleted]
  //     }))
  //     .catch(error => console.error('Fetch failed!', error));
  // }


  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    let newArr = Array.from(this.state.todos)
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.setState{
        todos[todoId].isCompleted = !todos[todoId].isCompleted
      })
    })
      .then(response => response.json())
      .then(todo => (todo => {
        newArr[todoId] = todo
        this.setState({
          todos: newArr
        })
      })
      )
      .catch(error => console.error('Fetch failed!', error));
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}