
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import About from './components/Layout/About';
import Home from './components/Layout/Home';
import Contact from './components/Layout/Contact';

function App() {
  return (
    <>
  <Routes>
    <Route  path= "/" element = {<Layout />}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
    </Route>
  </Routes>
    </>
  )
}

export default App
