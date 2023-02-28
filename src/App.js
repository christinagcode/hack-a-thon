
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';
import SelectNav from './components/SelectNav';
import Footer from  './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SelectNav />
      <Body />
      <Footer />
      
    </div>
  );
}

export default App;
