import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const TimerForm = ({timer, allTimers, onSave, onChange, saving, errors}) => {
  console.log(allTimers);
  return (
    <form>
      <h1>Manage Timer</h1>
      {/*<TextInput
        name="title"
        label="Order"
        value={timer.title}
        onChange={onChange}
        error={errors.title}
      />*/}
      
      <SelectInput
        name="title"
        label="Title"
        value={timer.title}
        defaultOption="Select Title"
        options={allTimers}
        onChange={onChange} error={errors.title}
      />

      <TextInput
        name="category"
        label="Name"
        value={timer.name}
        onChange={onChange}
        error={errors.name}
      />

      <TextInput
        name="length"
        label="Length"
        value={timer.length}
        onChange={onChange}
        error={errors.length}
      />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

// TimerForm.propTypes = {
//   timer: React.PropTypes.object.isRequired,
//   allTimers: React.PropTypes.array,
//   onSave: React.PropTypes.func.isRequired,
//   onChange: React.PropTypes.func.isRequired,
//   saving: React.PropTypes.bool,
//   errors: React.PropTypes.object
// };

export default TimerForm;
