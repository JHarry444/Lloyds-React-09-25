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
    // Enables routing (Routes, Route and Link compnents MUST be inside one of these)
    <Router>
      <Navigation /> {/* Navigation is on every page so must be OUTSIDE the Routes component */}
      <Routes> {/* Basically a switch case for Route that renders the correct one by matching its path to the current URL */}
        <Route path='/' element={<Home />} /> {/* Links a particualr React component to a particular path (URL) */}
        <Route path='/props' element={<PropsExample />} />
        <Route path='/external' element={<ExternalData />} />
        <Route path='/params/:name' element={<RouteParam />} /> {/* Data can be passed through to the element using params designated with a : */}
        <Route path='/search' element={<SearchParam />} /> {/* Don't need to do anything here if you're using search params */}
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
