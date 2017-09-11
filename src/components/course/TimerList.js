import React, { PropTypes } from 'react';
import TimerListRow from './TimerListRow';

const timer = ({timer}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Order</th>
        <th>Title</th>
        <th>Name</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
        {timer.map(time =>
          <TimerListRow key={time.id} time={time}/>
        )}
      </tbody>
    </table>
  );
};

timer.propTypes = {
  timer: PropTypes.array.isRequired
};

export default timer;