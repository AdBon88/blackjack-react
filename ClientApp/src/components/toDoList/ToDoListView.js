import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import AddItemModal from './AddItemModal';
import ToDoListTable from './ToDoListTable';

export class ToDoList extends Component {
  static displayName = ToDoList.name;
  state = { toDoItems: [], isLoading: true, shouldShowModal: false }

  constructor(props) {
    super(props);
    this.state = { toDoItems: [], isLoading: true, shouldShowModal: false };
  }

  componentDidMount = () => {
    this.populateToDoList();
  };


  showModal = () => {
    this.setState({ shouldShowModal: true });
  };


  hideModal = () => {
    this.setState({ shouldShowModal: false });
  };

  render() {
    let contents = this.state.isLoading
      ? <p><em>Loading...</em></p>
      : <div>
          <ToDoListTable toDoItems={this.state.toDoItems}></ToDoListTable>
          <div style={{ display: "flex" }}>
            <Button className="btn btn-primary" onClick={this.showModal}>Add item</Button>
          </div>
        </div>;

    return (
      <div>
        <h1 id="tableLabel" >To-Do</h1>
        <p>On my list I have...</p>
        {contents}
        <AddItemModal show={this.state.shouldShowModal} handleClose={this.hideModal}></AddItemModal>
      </div>
    );
  }

  async populateToDoList() {
    const response = await fetch('todolist');
    const data = await response.json();
    this.setState({ toDoItems: data, isLoading: false, shouldShowModal: false});

  }
}
