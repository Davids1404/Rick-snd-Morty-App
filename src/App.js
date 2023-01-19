import Login from './Components/Forms/Login';
import FoundCharacters from './Components/Pure/characters';
import NotFoundPage from './pages/NotFoundpage'
import './styles/App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    
    <Router>
        <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/characters' element={<FoundCharacters/>}></Route>
              <Route path='/*' element={<NotFoundPage/>}/>
        </Routes>
        
    </Router>
  );
}

export default App;
