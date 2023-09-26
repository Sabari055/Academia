import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Components/Authentication/Auth';
import Course from './Module/User/UserCourses/UserCourse.jsx';
import UserLesson from './Module/User/UserLesson/UserLesson';
import UserEnrolled from './Module/User/UserEnrolled/UserEnrolled';
import UserHome from './Module/User/UserHome/UserHome';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/home' element={<UserHome/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/lesson/:courseId' element={<UserLesson />} />
      <Route path='/enrolled' element={<UserEnrolled/>}/>
    </Routes>
   </Router>
  );
}

export default App;
