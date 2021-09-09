import Header from './components/Header';
import NavBar from './components/Card';
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import SideBar from "./components/SideBar.js";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {


  return (
    <div className="App">
      <Header />
       <Main/>
     <Footer/>
    </div>
  );
}

export default App;
