import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const { courses } = this.props;

    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

// for prop type validation
CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

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
  };
}

// once you add mapDispatchToProps, the dispatch propery on componenets no longer exist
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);