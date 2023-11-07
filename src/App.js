import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import MainDiv from './Components/MainDiv';
import Footerr from './Components/Footerr';

function App() {
  return (
    <div>
     <Header></Header>
     <MainDiv></MainDiv>
     <Footerr></Footerr>
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