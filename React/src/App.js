import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Components/Authentication/Auth';
import Course from './Module/User/UserCourses/UserCourse.jsx';
import UserLesson from './Module/User/UserLesson/UserLesson';
import UserEnrolled from './Module/User/UserEnrolled/UserEnrolled';
import UserHome from './Module/User/UserHome/UserHome';
import UserEvents from './Module/User/UserEvents/UserEvents';
import UserProfile from './Module/User/UserProfile/UserProfile';
import UserHomeEvents from './Module/User/UserEvents/UserHomeEvents';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/profile' element={<UserProfile/>}/>
      <Route path='/home' element={<UserHome/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/lesson/:courseId' element={<UserLesson />} />
      <Route path='/enrolled' element={<UserEnrolled/>}/>
      <Route path='/events-Home' element={<UserHomeEvents/>}/>
      <Route path='/events/:eventId' element={<UserEvents/>}/>
    </Routes>
   </Router>
  );
}


export default App;
