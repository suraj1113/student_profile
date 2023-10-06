//import './App.css';
//import {Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Registration from './components/registration/Registration';
import Home from './Home';
import Personal from './components/main4/Personal';
import { Route, Routes } from 'react-router-dom';
import StudentLogin from './StudentLogin';
import Missing from './Missing';
import Header from './components/header/Header';
import Logo from './components/logo/Logo';
import Copyright from './components/copyright/Copyright';

const places = [
  { name: "Advance Diploma in Computer Application (ADCA) - Old", category: "Advance Diploma in Computer Application (ADCA) - Old", course: "6 months" },
  { name: "Diploma in Fire and Safty Management", category: "Diploma in Fire and Safty Management", course: "1 Year" }

];

function App() {
  return (
    <>
      <Header/>
      <Logo/>
      <Navbar/>
      <Main />
      <Registration />
      <Routes>
					<Route path='/' element={<Home />}></Route>
          <Route path="/StudentLogin" element={<StudentLogin places={places} />} />
          <Route path="*" element={<Missing/>} />
				</Routes>
      <Personal/>
      <Copyright/>
      
    </>
  );
}

export default App;
