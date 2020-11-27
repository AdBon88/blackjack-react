import React, { Component } from 'react';

export class ToDoList extends Component {
  static displayName = ToDoList.name;

  constructor(props) {
    super(props);
    this.state = { items: [], loading: true };
  }

  componentDidMount() {
    this.populateToDoList();
  }

  static renderToDoTable(items) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Task No.</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item =>
            <tr key={item.date}>
              <td>{item.taskNo}</td>
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
      : ToDoList.renderToDoTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >To-Do</h1>
        <p>On my list I have...</p>
        {contents}
      </div>
    );
  }

  async populateToDoList() {
    const response = await fetch('weather');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
