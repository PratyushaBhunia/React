//functional component
import Home from "./Home";
import About from "./About";
import HomeClass from "./classComponents/HomeClass";
import ContactClass from "./classComponents/ContactClass";
import Greeting from "./Greeting";
function App() {
  let name="Pratyusha";
  let age=25;
  return(
    <>
      <h1>Welcome to react</h1>
      <h2>Thank you</h2>
      <Home />
      <HomeClass />
      <About />
      <ContactClass />
      <Greeting fn={name} age={age} color="white"/>
    </>
  );
}

export default App;