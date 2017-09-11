import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const TimerListRow = ({ timer }) => {
  return (
    <tr>
      <td>{timer.id}</td>
      <td><Link to={'/timer/' + timer.id}>{timer.title}</Link></td>
      <td>{timer.name}</td>
      <td>{timer.length}</td>
    </tr>
  );
};

TimerListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default TimerListRow;