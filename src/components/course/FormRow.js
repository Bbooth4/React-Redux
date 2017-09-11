import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const FormRow = () => {
  return (
    <Dropdown trigger={
        <Button>Drop me!</Button>
      }>
      <NavItem>one</NavItem>
      <NavItem>two</NavItem>
      <NavItem divider />
      <NavItem>three</NavItem>
    </Dropdown>
  );
};

// FormRow.propTypes = {
//   course: PropTypes.object.isRequired
// };

export default FormRow;