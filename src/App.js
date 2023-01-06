import './CSS/App.css';
import Homepage  from './components/Homepage';
import AdvancedNavbar from './components/AdvancedNavbar'

function App() {
  return (
    <div className="App"    >

     <header className="App-header">
     <AdvancedNavbar></AdvancedNavbar>

      <Homepage></Homepage>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
