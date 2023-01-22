import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Content } from './component/Dashboard/content';
import Education from './component/Education/edu';
import Info from './component/General-info/general_info';
import Skills from './component/Others/personalSkill';
import { Login } from './component/sign_components/login';
import { Signup } from './component/sign_components/signup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/Dashboard' element={<Content/>} />
          <Route path='/general_info' element={<Info/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/skills' element={<Skills/>} />

        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
