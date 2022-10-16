


const initialState = {
  students: [{id: 1, name: "vova"}, {id: 2, name: "Chelidze"}],
}

export const ADD_STUDENT = 'ADD_STUDENT'

export const studentReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_STUDENT:
      return {...state, students: [...state.students, ...action.payload]}
    default:
      return state;
  }
}


export const ADD_STUDENT_CREATOR = (payload) => ({type: ADD_STUDENT, payload:payload})