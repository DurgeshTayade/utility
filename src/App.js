
import './App.css';
// import'./Components/NavBar.jsx'
import Nav from './Components/Nav.jsx'
import Home from './Components/Home.jsx'
import Education from './Components/Education.jsx'
import Technology from './Components/Technology.jsx'
import Projects from './Components/Projects.jsx'
import Footer from './Components/Footer.jsx'
function App() {
  return (
    <div className='text-center'>
      <>
      <Nav/>
      <Home/>
      <Education/>
      <Technology/>
      <Projects/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
