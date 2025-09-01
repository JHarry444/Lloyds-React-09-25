import './App.css'
import Trainer from './components/Trainer'
import Input from './components/Input'
import me from "./assets/me.jpg";

function App() {

  return (
    <>
      <img src={me} alt="cheeky chappy" />
      <Trainer name={"Jordan"} age={31} specialism={"Java"} picture={"https://avatars.githubusercontent.com/u/41322826?v=4"} />
      <Trainer name={"Cameron"} age={32} specialism={"Web"} />
      {
        Trainer({name: "Shafeeq", age: 31, specialism: "Oracle"})
      }
      <Input />
      <input type="text" />
    </>
  )
}

export default App
