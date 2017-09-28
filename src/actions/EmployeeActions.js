import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => {
  console.log('in employeeCreate ', name, phone, shift);
};
