
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home      from'./Pages/Home'
import Register  from  './Pages/Register'
import Edit      from './Pages/Edit'
import Profile   from './Pages/Profile'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
    {/* to set path in react -- react-router-dom */}
   <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/edit/:id' element={<Edit/>}/>
  <Route path='/profile/:id' element={<Profile/>}/>
</Routes>

<Footer/>
    </>
  );
}

export default App;
