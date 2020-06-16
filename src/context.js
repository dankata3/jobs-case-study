import React, { useState } from 'react';

export const PriorityContext = React.createContext({
  priorityOprions: [],
});

export default (props) => {
  const [priorityOptions, setPriorityOptions] = useState([
    {
      id: 1,
      value: 'urgent',
      color: 'danger',
    },
    {
      id: 2,
      value: 'regular',
      color: 'warning',
    },
    {
      id: 3,
      value: 'trivial',
      color: 'primary',
    },
  ]);
  return (
    <PriorityContext.Provider value={{ priorityOptions }}>
      {props.children}
    </PriorityContext.Provider>
  );
};
