import './CSS/App.css';
import Homepage  from './components/Homepage';
import AdvancedNavbar from './components/AdvancedNavbar'
import MyComponent from './components/Locations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App"    >
     
     <header className="App-header">
        <AdvancedNavbar />
      
     <div className="line" />
     <p>    </p>
     <MyComponent/>
      <p> </p>
      <Homepage/>
      <p> </p>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
