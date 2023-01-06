import './CSS/App.css';
import Homepage  from './components/Homepage';
import AdvancedNavbar from './components/AdvancedNavbar'

function App() {
  return (
    <div className="App"    >
     
     <header className="App-header">
     <AdvancedNavbar/>
     <div className="line" />
      <Homepage/>
      </header>
      
    </div>
  );
}

export default App;
