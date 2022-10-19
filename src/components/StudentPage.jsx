import { Button, FormControl } from 'react-bootstrap';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { fetchManyStudents } from '../asyncFetch/fetchManyStudents';
import { ADD_STUDENT_CREATOR, DELETE_STUDENT_CREATOR } from '../store/studentReducer';

const StudentPage = () => {
  const {students} = useSelector(state => state.student);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.vova.value;
    const user = {
      id: uuidv4(),
      name: input
    }
    if(input){
      dispatch(ADD_STUDENT_CREATOR(user));
      return
    }
    console.log(form);
    form.reset();
  }
  const handleFetchStudent = () => {
    dispatch(fetchManyStudents());
  }
  const handleDeleteStudent = (payload) => {
    dispatch(DELETE_STUDENT_CREATOR(payload))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl type='text' name='vova'></FormControl>
        <Button variant='dark' type='submit'>Add Student</Button>
      </form>
      <Button variant="dark" onClick={handleFetchStudent}>Fetch Students</Button>
      {students.length ? 
      students.map(student =>
        <div key={student.id}>{student.name}
          <Button variant="danger" onClick={() => handleDeleteStudent(student.id)}>X</Button>
        </div>
      )
      : 
      <h1>There is no students yet</h1>
      }
    </div>
  )
}

export default StudentPage