import React, { useState } from 'react';
import Input from '../Input/Input';

const Modal = (props) => {
  const { updatedJob, editJobList, closeModal } = props;
  const [updatedPriority, setUpdatedPriority] = useState();

  const editJobListHandler = (e) => {
    e.preventDefault();

    editJobList(updatedJob.id, updatedPriority);
    closeModal(null);
  };

  return (
    <form
      className="form update-form p-4 border card bg-light mb-5"
      onSubmit={(e) => editJobListHandler(e)}
    >
      <legend>{updatedJob.jobName}</legend>
      <span className="close-modal-btn close" onClick={closeModal}>
        &times;
      </span>
      <Input
        id="priority-edit"
        label="Priority"
        value={updatedPriority || updatedJob.priority}
        name="priority"
        inputtype="select"
        changed={(e) => setUpdatedPriority(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Update
      </button>
    </form>
  );
};

export default Modal;
