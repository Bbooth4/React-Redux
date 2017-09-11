import React, { PropTypes } from 'react';
// import FormRow from './FormRow';

const Form = ({ random }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title of the Shit</th>
          <th>Author of the Shit</th>
          <th>Category of the Shit</th>
          <th>Length of the shit</th>
        </tr>
      </thead>
      <tbody>
      {random.map(r =>
        <FormRow key={r.id} r={r}/>
      )}
      </tbody>
    </table>
  );
};

Form.propTypes = {
  courses: PropTypes.array.isRequired
};

export default Form;
