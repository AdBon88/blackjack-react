import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import AddItemModal from './AddItemModal';

export class ToDoList extends Component {
  static displayName = ToDoList.name;
  state = { toDoItems: [], loading: true, shouldShowModal: false }

  constructor(props) {
    super(props);
    this.state = { toDoItems: [], loading: true, shouldShowModal: false };
    this.showModal = this.showModal.bind(this);
  }

  // componentDidMount() {
  //   this.populateToDoList();
  //   console.log(this.state);
  // }
  componentDidMount = () => {
    this.populateToDoList();
  };


  showAddItemModal() {
    console.log(this.state.toDoItems);
    // this.state.shouldShowModal = true;
  }

  showModal() {
    console.log("hello world!@");
  };

  static renderContents(toDoitems) {

    return (
      <div>
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
                <td>{toDoitems.indexOf(item) + 1 }</td>
                <td>{item.description}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div style={{ display: "flex" }}>
            <Button className="btn btn-primary" onClick={() => this.showModal()}>Add item</Button>
        </div>
      </div>

    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ToDoList.renderContents(this.state.toDoItems);

    return (
      <div>
        <h1 id="tabelLabel" >To-Do</h1>
        <p>On my list I have...</p>
        {contents}
        <AddItemModal  show={this.state.shouldShowModal} handleClose={this.hideModal}>
          <p>Modal</p>
        </AddItemModal>
      </div>
    );
  }

  async populateToDoList() {
    const response = await fetch('todolist');
    const data = await response.json();
    this.setState({ toDoItems: data, loading: false, shouldShowModal: false});

  }
}
