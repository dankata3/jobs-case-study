import React, { useState, Fragment } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Form from './containers/Form/Form';
import JobList from './containers/JobList/JobList';

const App = () => {
  const [updatedJobObj, setUpdatedJobObj] = useState(null);
  const [jobs, setJobs] = useState([
    {
      id: 19221,
      jobName: 'Developer',
      priority: '2',
    },
    {
      id: 12323,
      jobName: 'Teacher',
      priority: '3',
    },
    {
      id: 191243221,
      jobName: 'Doctor',
      priority: '1',
    },
  ]);

  const toggleModalHandler = (jobId) => {
    const updatedJob = jobs.find((job) => job.id === jobId);

    setUpdatedJobObj(updatedJob);
  };

  const addJobListHandler = (jobName, priority) => {
    const newJobs = [...jobs];
    const newJob = {
      id: Math.floor(Math.random() * 10000),
      jobName,
      priority,
    };

    const updatedJobs = newJobs.concat(newJob);
    setJobs(updatedJobs);
  };

  const deleteJobListHandler = (id) => {
    const newJobs = [...jobs];

    const updatedJobs = newJobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  const editJobListHandler = (id, priority) => {
    const newJobs = [...jobs];
    const updatedJobs = newJobs.map((job) => {
      if (job.id === id) {
        return {
          ...job,
          priority,
        };
      }
      return {
        ...job,
      };
    });

    setJobs(updatedJobs);
  };

  const modal = updatedJobObj ? (
    <Fragment>
      <div className="backdrop"></div>
      <Modal
        closeModal={toggleModalHandler}
        editJobList={editJobListHandler}
        updatedJob={updatedJobObj}
      />
    </Fragment>
  ) : null;

  return (
    <div className="App">
      <div className="container pt-5 position-relative">
        <Form addJobList={addJobListHandler} />
        <JobList
          jobs={jobs}
          openModal={(id) => toggleModalHandler(id)}
          deleteJobList={deleteJobListHandler}
        />
        {modal}
      </div>
    </div>
  );
};

export default App;
