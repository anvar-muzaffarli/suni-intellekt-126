import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


// komponentler buraya gelecek
import Navbar from './components/Navbar'
import Introduction from './components/Introduction';
import Partnyorlar from './components/Partnyorlar';

function App() {
  return (
    <div className="wrapper">
    <Navbar />
    <Introduction />
    <Partnyorlar />
    </div>
   
  );
}

export default App;
