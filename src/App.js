import './App.css';
import Scene from './components/Scene/Scene';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/alt/Home';

function App() {
  return (
    // <>
    //   <Routes>
    //     <Route path="/scene" element={<Scene />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/" element={<Main />} />
    //   </Routes>
    // </>
    <Main />
  );
}

export default App;
