import './App.css';
import Trainer from './components/Trainer';
import Input from './components/Input';
import me from "./assets/me.jpg";
import ExternalData from './components/ExternalData';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './components/Home';
import PropsExample from './components/PropsExample';
import RouteParam from './components/RouteParam';
import SearchParam from './components/SearchParam';
import Navigation from './components/Navigation';

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/props' element={<PropsExample />} />
        <Route path='/external' element={<ExternalData />} />
        <Route path='/params/:name' element={<RouteParam />} />
        <Route path='/search' element={<SearchParam />} />
        <Route path='/external' element={<ExternalData />} />
        <Route path='/images' element={<img src={me} alt="cheeky chappy" />} />
        <Route path='/components' element={<>
          <Input />
          <input type="text" />
        </>} />
      </Routes>


    </Router>
  )
}

export default App
