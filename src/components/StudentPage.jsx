import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { ADD_STUDENT_CREATOR } from '../store/studentReducer';

const StudentPage = () => {
  const {students} = useSelector(state => state.student);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.vova.value;
    console.log(form.elements.vova.value)
    const user = {
      id: uuidv4(),
      name: input
    }
    dispatch(ADD_STUDENT_CREATOR(user));
    form.reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='vova'></input>
        <button type='submit'>Add Student</button>
      </form>
      {students.length ? 
      students.map(student =>
        <div key={student.id}>{student.name}</div>
      )
      : 
      <h1>There is no students yet</h1>
      }
    </div>
  )
}

export default StudentPage