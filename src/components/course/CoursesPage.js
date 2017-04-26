import React, { PropTypes } from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: ""}
    };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange = (e) => {
    console.log('onTitleChange')
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({ course: course });
  }

  onClickSave =(e) => {
    console.log('onClickSave')
    // alert(`words`);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Courses </h1>
        <h2>Add Course</h2>
        <input 
          type="text"
          value={this.state.course.title}
          onChange={this.onTitleChange}
        />
        <input 
          type="submit"
          onClick={this.onClickSave}
          value="Save"
        />
      </div>
    );
  }
}

export default CoursesPage;