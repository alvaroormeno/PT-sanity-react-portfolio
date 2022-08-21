
import './App.css';
// Importing all components from CONTAINER folder, using and index.js file inside container folder to easily import using destructure.
import { About, Footer, Header, Skills, Testimonial, Work} from './container'

function App() {
  return (
    <div className='app'>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
