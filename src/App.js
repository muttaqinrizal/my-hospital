import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Counter from "./component/Counter.js"
import Kepala from './component/Header.js'
import "./style.css"
import Home from "./pages/Home";
import About from "./pages/About";


class App extends React.Component {
  render() {
    return (
      <div >
        <Home/>
        {/* <About/> */}
        {/* <Kepala name="RS Tugu"/>
        <h1 style={{fontSize:"20px", color:"#f54242", marginBottom:"60px"}}>hai </h1>
        <h2 style={styles.head}>Hello</h2>
        <h2 style={styles.foot}>Hiii</h2>
        <h3 class="kepala">Hiii</h3>
        <h4 class="kepala">hai hai</h4>
        
        <Counter /> */}
      </div>
    );
  }
}

const styles = {
  head:{
    fontSize:"20px", 
    color:"#248f29", 
    marginBottom:"60px"
  },
  foot:{
    color: "blue",
    fontFamily: "Times New Roman",
  }
}




export default App;
