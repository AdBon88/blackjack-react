import React, { Component } from 'react';
import './modal.css';
import Button from 'reactstrap/lib/Button';


const AddItemModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
<input
                    className="inputField"
                    placeholder="laundry..."
                    // onChange={this.handleChange}
                  ></input>

          {/* <p>Modal</p>
          <p>Data</p> */}
        <div>
          <Button className="btn btn-modal" onClick={handleClose}>Save</Button>
        </div>
      </section>
    </div>
  );
};
export default AddItemModal;