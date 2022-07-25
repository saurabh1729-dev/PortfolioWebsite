import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body";
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Intro/> */}
      <Body/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
