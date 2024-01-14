import './App.css';
import { Register } from './components/Register';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar/>

        <main className='main'>
        <Routes>
            <Route path="/register" element={<Register/>}/>

        </Routes>
        </main>
      
    </div>
  );
}

export default App;
