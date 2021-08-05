import logo from './logo.svg';
import './App.css';
import'./User.js';
import User from './User.js';
import HomeContainer from './containers/HomeContainer.js';
function App() {
  return (
    <div className="App">
     <h1>App Component</h1>
     <User data={{name:'Ram Ji',sex:'Male'}}/>
     <HomeContainer/>
    </div>
  );
}

export default App;
