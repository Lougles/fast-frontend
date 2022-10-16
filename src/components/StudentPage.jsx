import React from 'react'
import { useSelector } from 'react-redux'

const StudentPage = () => {
  const {students} = useSelector(state => state.student)
  return (
    <div>
      {students ? 
      students.map(student =>
        <div key={student.id}>{student.name}</div>
      )
      : 
      <div></div>
      }
    </div>
  )
}

export default StudentPage