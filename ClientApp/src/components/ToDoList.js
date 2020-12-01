import React, { Component } from 'react';

export class ToDoList extends Component {
  static displayName = ToDoList.name;

  constructor(props) {
    super(props);
    this.state = { toDoItems: [], loading: true };
  }

  componentDidMount() {
    this.populateToDoList();
  }

  static renderToDoTable(toDoitems) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Task No.</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {toDoitems.map(item =>
            <tr>
              <td>1</td>
              <td>{item.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ToDoList.renderToDoTable(this.state.toDoItems);

    return (
      <div>
        <h1 id="tabelLabel" >To-Do</h1>
        <p>On my list I have...</p>
        {contents}
      </div>
    );
  }

  async populateToDoList() {
    const response = await fetch('todolist');
    const data = await response.json();
    this.setState({ toDoItems: data, loading: false });
  }
}
