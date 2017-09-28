import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log('this.props is ', this.props);
    return (
      <View>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
        <Text>Employee list</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
