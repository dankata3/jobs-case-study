import React, { useState, useEffect } from 'react';
import Input from '../../components/Input/Input';
import { checkValidity } from '../../utils/utils';

const Form = (props) => {
  const initialJobNameState = {
    value: '',
    validation: {
      required: true,
      maxLength: 70,
      english: true,
    },
    valid: {
      value: false,
      error: null,
    },
    touched: false,
  };
  const initialPriorityState = {
    value: '',
    validation: {
      required: true,
    },
    valid: {
      value: false,
      error: null,
    },
    touched: false,
  };

  const [jobName, setJobName] = useState(initialJobNameState);
  const [priority, setPriority] = useState(initialPriorityState);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (jobName.valid.value && priority.valid.value) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [jobName.valid.value, priority.valid.value, setIsFormValid]);

  const resetForm = () => {
    setJobName(initialJobNameState);
    setPriority(initialPriorityState);
  };

  const inputChangeHangler = (value, inputState, setInputState) => {
    const newInputState = { ...inputState };

    newInputState.value = value;
    newInputState.touched = true;
    newInputState.valid = checkValidity(value, newInputState.validation);

    setInputState(newInputState);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    props.addJobList(jobName.value, priority.value);
    resetForm();
  };

  return (
    <form
      action=""
      className="form p-4 border card bg-light mb-5 "
      onSubmit={submitFormHandler}
    >
      <legend>Job Form</legend>
      <Input
        id="jobName"
        label="Job"
        value={jobName.value}
        touched={jobName.touched}
        name="jobName"
        inputtype="input"
        validation={jobName.valid}
        changed={(e) => inputChangeHangler(e.target.value, jobName, setJobName)}
      />
      <Input
        id="priority"
        label="Priority"
        value={priority.value}
        ouched={priority.touched}
        validation={priority.valid}
        name="priority"
        inputtype="select"
        changed={(e) =>
          inputChangeHangler(e.target.value, priority, setPriority)
        }
      />
      <button disabled={!isFormValid} className="btn btn-primary" type="submit">
        Create
      </button>
    </form>
  );
};

export default Form;
