/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { TaskContainer } from '../components/TaskContainer';

import { fetchTasks } from '../actions/taskList';

class Discover extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  };

  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="dark-content" />
        <TaskContainer navigation={this.props.navigation} />
      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   baseCurrency: state.currencies.baseCurrency,
//   quoteCurrency: state.currencies.quoteCurrency,
//   primaryColor: state.theme.primaryColor,
// });

export default connect(state => state)(Discover);
