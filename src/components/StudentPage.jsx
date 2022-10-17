import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const StudentPage = () => {
  const [input, setInput] = useState();
  const {students} = useSelector(state => state.student)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.name.value;
    console.log(input);
    setInput({input}).onSubmit()
    form.reset();
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
      {/* <input value={input} onChange={(e)=> setInput(e.target.value)}></input>
      <button>Add Student</button> */}
    </div>
  )
}

export default StudentPage