import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path ="/" element ={<Home/>}/>
                <Route exact path ="/about" element ={<About/>}/>
                <Route exact path ="/profile" element ={<Profile/>}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
