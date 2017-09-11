import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as timerActions from '../../actions/timerActions';
import TimerForm from './TimerForm';
import { timersFormattedForDropdown } from '../../selectors/selectors';
import toastr from 'toastr';

export class TimerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      timer: Object.assign({}, props.timer),
      errors: {},
      saving: false
    };

    // this.updateTimerState = this.updateTimerState.bind(this);
    // this.saveTimer = this.saveTimer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.timer.id != nextProps.timer.id) {
      // Necessary to populate form when existing timer is loaded directly.
      this.setState({timer: Object.assign({}, nextProps.timer)});
    }
  }

  updateTimerState = (e) => {
    const field = e.target.name;
    let timer = Object.assign({}, this.state.timer);
    timer[field] = e.target.value;
    return this.setState({timer: timer});
  }

  timerFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.timer.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveTimer = (event) => {
    event.preventDefault();

    if (!this.timerFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveTimer(this.state.timer)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Timer saved');
    this.context.router.push('/timers');
  }

  render() {
    return (
      <TimerForm
        allTimers={this.props.timers}
        onChange={this.updateTimerState}
        onSave={this.saveCourse}
        timer={this.state.timer}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

TimerPage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
TimerPage.contextTypes = {
  router: PropTypes.object
};

function getTimerById(timers, id) {
  const timer = timers.filter(timer => timer.id == id);
  if (timer) return timer[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const timerId = ownProps.params.id; // from the path `/timer/:id`

  let timer = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (timerId && state.timers.length > 0) {
    timer = getTimerById(state.timer, timerId);
  }

  return {
    timer: timer,
    timers: timersFormattedForDropdown(state.timers)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(timerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);
