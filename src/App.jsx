import './App.css';
import me from "./assets/me.jpg";
import ExternalData from './components/static/ExternalData';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from './components/static/Home';
import PropsExample from './components/static/PropsExample';
import RouteParam from './components/routing/RouteParam';
import SearchParam from './components/routing/SearchParam';
import Navigation from './components/routing/Navigation';
import EventHandling from './components/interactive/EventHandling';
import Counter from './components/interactive/Counter';
import Input from './components/static/Input';
import TrainerContainer from './components/interactive/lifting_state/TrainerContainer';
import { ThemeProvider } from './themeContext';
import MyList from './components/MyList';

function App() {


  return (
    <ThemeProvider>
      {/* Enables routing (Routes, Route and Link compnents MUST be inside one of these) */}
      <Router>
        <Navigation /> {/* Navigation is on every page so must be OUTSIDE the Routes component */}
        <Routes> {/* Basically a switch case for Route that renders the correct one by matching its path to the current URL */}
          <Route path='/' element={<Home />} /> {/* Links a particular React component to a particular path (URL) */}
          <Route path='/props' element={<PropsExample />} />
          <Route path='/external' element={<ExternalData />} />
          <Route path='/params/:name' element={<RouteParam />} /> {/* Data can be passed through to the element using params designated with a : */}
          <Route path='/search' element={<SearchParam />} /> {/* Don't need to do anything here if you're using search params */}
          <Route path='/images' element={<img src={me} alt="cheeky chappy" />} />
          <Route path='/components' element={<>
            <Input />
            <input type="text" />
          </>} />
          <Route path='/events' element={<EventHandling />} />
          <Route path='/state' element={<Counter />} />
          <Route path='/effect' element={<TrainerContainer />} />
          <Route path='/children' element={<MyList>
            <li>Milk</li>
            <li>Eggs</li>
            <li>Butter</li>
          </MyList>
          } />
        </Routes>
      </Router>

    </ThemeProvider>

  )
}

export default App
