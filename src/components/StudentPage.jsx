import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { ADD_STUDENT_CREATOR } from '../store/studentReducer';

const StudentPage = () => {
  const [input, setInput] = useState();
  const {students} = useSelector(state => state.student);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.name.value;
    const user = {
      id: uuidv4(),
      name: input
    }
    dispatch(ADD_STUDENT_CREATOR(user));
    form.reset();
  }
  function AddStudent(name) {
    const user = {
      id: uuidv4(),
      name: name
    }
    console.log(user);
    dispatch(ADD_STUDENT_CREATOR(user));
  }

  return (
    <div>
      {students.length ? 
      students.map(student =>
        <div key={student.id}>{student.name}</div>
      )
      : 
      <h1>There is no students yet</h1>
      }
      <form onSubmit={handleSubmit}>
        <input type='text' name='name'></input>
        <button type='submit'>Add Student</button>
      </form>
      {/* <button onClick={() => AddStudent(prompt())}>TEST</button> */}
    </div>
  )
}

export default StudentPage