import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
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

  onClickSave = (e) => {
    console.log('onClickSave')
    this.props.actions.createCourse(this.state.course);
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

// for prop type validation 
CoursesPage.propTypes - {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // is all actions within the courseActions file
    // you can bind a singular action by calling within the (courseAction.createCourse())
    actions: bindActionCreators(courseActions, dispatch)
    // the below is used if you do not import bindActionCreators from redux
    // createCourse: course => dispatch(courseActions.createCourse(course))
  } 
}

// once you add mapDispatchToProps, the dispatch propery on componenets no longer exist
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);