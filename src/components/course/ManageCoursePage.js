import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  updateCourseState = (e) => {
    const field = e.target.name;
    let course = this.state.course;
    course[field] = e.target.value;
    return this.setState({ course: course }); 
  }

  saveCourse = (e) => {
    e.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.erors}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

// function getCourseByID(courses, id) {
//   console.log(courses)
//   const course = courses.filter(course => course.id === id);
//   if (course) return course[0];
//   return null; 
// }

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;

  let course = {
    id: "",
    watchHref: "", 
    authorId: "", 
    length: "", 
    category: ""
  };

  if (courseId && state.courses.length > 0) {
    course = state.courses.filter(course => course.id === courseId)[0];
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id, 
      text: `${author.firstName} ${author.lastName}`
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);