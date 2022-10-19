


const initialState = {
  students: [],
}

export const ADD_STUDENT = 'ADD_STUDENT'
export const ADD_MANY_STUDENTS = 'ADD_MANY_STUDENTS'
export const DELETE_STUDENT = 'DELETE_STUDENT'

export const studentReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_STUDENT:
      return {...state, students:[...state.students, action.payload]}
    case ADD_MANY_STUDENTS:
      return {...state, students: [...state.students, ...action.payload]}
    case DELETE_STUDENT:
      return {...state, students: state.students.filter(i => i.id !== action.payload)}
    default:
      return state;
  }
}

export const ADD_STUDENT_CREATOR = (payload) => ({type: ADD_STUDENT, payload:payload})
export const ADD_MANY_STUDENTS_CREATOR = (payload) => ({type: ADD_MANY_STUDENTS, payload:payload})
export const DELETE_STUDENT_CREATOR = (payload) => ({type: DELETE_STUDENT, payload:payload})