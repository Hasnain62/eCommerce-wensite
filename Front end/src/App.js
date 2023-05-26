import './CSS/App.css';
import Homepage  from './components/Homepage';
import AdvancedNavbar from './components/AdvancedNavbar'
import MyComponent from './components/Locations';
import Footer from './components/Footer';
import { BrowserRouter, Routes , Route, Switch } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div className="App"    >
      
      <header className="App-header">
        <AdvancedNavbar />
        
      
   
        <Homepage/>
        < Routes>
            <Route exact path='/Homepage'element={<HomePage/>} />
            <Route exact path='/Form'element={<Form/>} />
        </Routes>
        <p> </p>
        <Footer/>
        </header>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
