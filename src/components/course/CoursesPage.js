import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

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
    this.props.dispatch(courseActions.createCourse(this.state.course));
    // this needs to called to be able to fire off an action for redux to handle 
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Courses </h1>
        {this.props.courses.map(this.courseRow)}
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

CoursesPage.propTypes - {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// function mapDispatchToProps() {
  // mapDispatchToProps   optional to be called in connect below 
// }

export default connect(mapStateToProps)(CoursesPage);