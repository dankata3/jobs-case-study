import React, { useContext } from 'react';
import { PriorityContext } from '../../context';

const Input = (props) => {
  const { priorityOptions } = useContext(PriorityContext);
  const {
    id,
    value,
    name,
    changed,
    validation,
    touched,
    label,
    inputtype,
  } = props;

  let inputElement;
  let errorMessage;
  let inputClasses = ['form-control'];

  if (validation && !validation.value && touched) {
    inputClasses.push('input-error');

    errorMessage = <p className="input-error-message">{validation.error}</p>;
  }

  switch (inputtype) {
    case 'input':
      inputElement = (
        <input
          id={id}
          className={inputClasses.join(' ')}
          value={value}
          onChange={changed}
          type="text"
          name={name}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={value}
          onChange={changed}
          name={name}
        >
          <option value="">Choose Priority</option>
          {priorityOptions.map((priority) => (
            <option key={priority.id} value={priority.id}>
              {priority.value}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          value={value}
          name={name}
          onChange={changed}
          type="text"
        />
      );
  }

  return (
    <div className="position-relative mb-4">
      <label htmlFor="">{label}</label>
      {inputElement}
      {errorMessage}
    </div>
  );
};

export default Input;
