import CountPage from '../components/CountPage'
import StudentPage from '../components/StudentPage'
import { COUNT_ROUTE, HOME, STUDENT_ROUTE } from '../utils/consts'


export const publicRoutes = [
  {
    path: HOME,
    Component: CountPage
  },
  {
    path: COUNT_ROUTE,
    Component: CountPage
  },
  {
    path: STUDENT_ROUTE,
    Component: StudentPage
  }
]