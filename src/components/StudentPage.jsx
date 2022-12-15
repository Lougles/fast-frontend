import { Button, Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
// import { fetchManyStudents } from '../asyncFetch/fetchManyStudents';
import { ADD_MANY_STUDENTS_CREATOR, ADD_STUDENT_CREATOR, DELETE_STUDENT_CREATOR } from '../store/studentReducer';

const StudentPage = () => {
  const {students} = useSelector(state => state.student);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchManyStudents = () => {
  //     return dispatch => {
  //       try {   
  //         fetch('https://jsonplaceholder.typicode.com/users')
  //         .then(response => response.json())
  //         .then(json => dispatch(ADD_MANY_STUDENTS_CREATOR(json)));
  //       } catch (e) {
  //         console.log(e.message);
  //       }
  //     }
  //   }
  //   dispatch(fetchManyStudents())
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputName = form.elements.name.value;
    const inputPrice = form.elements.price.value;
    const user = {
      id: uuidv4(),
      name: inputName,
      price: inputPrice
    }
    if(inputName){
      dispatch(ADD_STUDENT_CREATOR(user));
      form.reset();
      return
    }
  }
  // const handleFetchStudent = () => {
  //   dispatch(fetchManyStudents());
  // }
  const handleDeleteStudent = (payload) => {
    dispatch(DELETE_STUDENT_CREATOR(payload))
  }
  return (
  <Container className='mt-4' fluid='sm'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Input name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='name'/>
        <Form.Label>Input price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" name='price'/>
      </Form.Group>
      <Button variant="dark" type="submit">
        ADD
      </Button>
    </Form>
    <ListGroup className='mt-4 pt-2'>
      {students.length ? 
        students.map(student =>
        <ListGroupItem key={student.id} className='d-flex justify-content-between'>
          {student.name} | {student.price} UAH
          <Button variant="danger" onClick={() => handleDeleteStudent(student.id)}>X</Button>
        </ListGroupItem>
        )
      : 
        <h1 className='d-flex justify-content-center'>There is no students yet</h1>
      }
    </ListGroup>
  </Container>
  )
}

export default StudentPage