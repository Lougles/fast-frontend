import { ADD_MANY_STUDENTS_CREATOR } from "../store/studentReducer"


export const fetchManyStudents = () => {
  return dispatch => {
    try {      
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(ADD_MANY_STUDENTS_CREATOR(json)));
    } catch (e) {
      console.log(e.message);
    }
  }
}