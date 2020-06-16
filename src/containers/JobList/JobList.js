import React, { useState, useEffect, useContext, Fragment } from 'react';
import { PriorityContext } from '../../context';
import { mapObject } from '../../utils/utils';

const JobList = (props) => {
  const [filteredJobs, setFilteredJobs] = useState(props.jobs);
  const { priorityOptions } = useContext(PriorityContext);
  const prioritiesColorMap = mapObject(priorityOptions, 'color');
  const prioritiesValueMap = mapObject(priorityOptions, 'value');
  const reorderedJobs = filteredJobs.sort((a, b) =>
    a.priority > b.priority ? 1 : -1
  );

  useEffect(() => {
    setFilteredJobs(props.jobs);
  }, [props.jobs]);

  const filterChangeHandler = (value) => {
    const filtered = props.jobs.filter((job) =>
      job.jobName.toLowerCase().includes(value)
    );

    setFilteredJobs(filtered);
  };

  const jobItem = reorderedJobs.map((job) => {
    return (
      <li
        key={job.id}
        className={`list-group-item list-group-item-action d-flex justify-content-between row mb-2 bg-${
          prioritiesColorMap[job.priority]
        }`}
      >
        <div className="d-flex justify-content-between col-8 text-white font-weight-bold">
          <span>{job.jobName}</span>
          <span>{prioritiesValueMap[job.priority]}</span>
        </div>
        <div className="controls col-4">
          <button
            className="btn btn-info ml-3 mb-2 mb-md-0 border"
            onClick={() => props.openModal(job.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger ml-3 border"
            onClick={() => props.deleteJobList(job.id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  });

  return (
    <Fragment>
      <div className="border-bottom d-flex justify-content-between mb-3 p-3">
        <h2>Job List</h2>
        <input
          id="filter"
          className="p-3"
          type="search"
          placeholder="Search job..."
          onChange={(e) => filterChangeHandler(e.target.value)}
        />
      </div>
      <ul>{jobItem}</ul>
    </Fragment>
  );
};

export default JobList;
