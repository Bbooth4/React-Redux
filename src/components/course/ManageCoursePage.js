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

  render() {
    // const { course } = this.state;

    return (
      <CourseForm
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.erors}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let course = {
    id: "", 
    warchHref: "", 
    authorId: "", 
    length: "", 
    category: ""
  };

  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);