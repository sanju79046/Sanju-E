import logo from './logo.svg';
import './App.css';
// import {Message} from "./Message";
// import {ListElements} from './ListElements';
import { Naive } from './components1/Naive';
function App() {
  return (
    <div>
      {
             <Naive></Naive>
      }
    </div>
  );
}

export default App;

// return (
  //to access the return with various statements<div>
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );