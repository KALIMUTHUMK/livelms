import logo from './logo.svg';
import './App.css';
import SideCom from './Component/SideCom';
import NavCom from './Component/NavCom';
import { Route, Routes } from 'react-router-dom';
import Branches from './Component/Branches';
import Bottomm from './Component/Bottom';
import Faculty from './Component/Faculty';
import Subject from './Component/Subject';
import Courses from './Component/Courses';
import Students from './Component/Students';
import Semesters from './Component/Semester';
import Section from './Component/Section';
import Exam from './Component/Exam';
import Results from './Component/Result';
import Attendance from './Component/Attendance';
import Announcement from './Component/Announcement';
import Admin from './Component/Admin';
import Support from './Component/Support';
import Home from './Component/Home';





function App() {
  return (
    <>
    <SideCom/>
    <NavCom/>
    
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Branches' element={<Branches/>}/>
          <Route path='/Faculty' element={<Faculty/>}/>
          <Route path='/Subject' element={<Subject/>}/>
          <Route path='/Courses' element={<Courses/>}/>
          <Route path='/Students' element={<Students/>}/>
          <Route path='/Semester' element={<Semesters/>}/>
          <Route path='/Section' element={<Section/>}/>
          <Route path='/Exam' element={<Exam/>}/>
          <Route path='/Result' element={<Results/>}/>
          <Route path='/Attendance' element={<Attendance/>}/>
          <Route path='/Announcement' element={<Announcement/>}/>
          <Route path='/Support' element={<Support/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          
    </Routes>
    <Bottomm/>
    </>
  );
}

export default App;
