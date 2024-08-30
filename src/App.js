import Aid from   './components/Aid';
import Navbar from "../src/components/Navbar"
import Footer from   './components/Footer';
import Grant from   './components/Grant';
import Suggestion from   './components/Suggestion';
import About from './pages/About/About'
import Hero from './pages/Home/Hero'
import Results from './pages/Results/Results'
import FAQ from './pages/FAQ/FAQ'
import Courses from './pages/Courses/Courses'
import "./assets/css/index.css";

function App() {
  return (
    <div className="container">
     
      <Navbar/>
      <Hero />
      <Suggestion />
      <Results />
      <Grant />
      <Aid />
      <Courses />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;