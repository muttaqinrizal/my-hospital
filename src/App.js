import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/Counter.js";
import Kepala from "./component/Header.js";
import "./style.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./component/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Route, Switch } from "react-router-dom";

// function App {
//   return
// }
class App extends React.Component {
  state = {
    page: "Home"
  };

  handleChangePage = params => {
    this.setState({
      page: params
    });
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <Container maxWidth="md">
          <Navigation /> {/*nama komponen buttom navigation*/}
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/store-locator" component={Counter}/>
            <Route path="/scan" component={About}/>
            <Route path="#" component={"nama komponennya"}/>
          </Switch>
          {/* <Navigation changePage={this.handleChangePage}/>
          {
            this.state.page === "Home" ? (<Home/>):
            this.state.page === "Store" ? (<Counter/>):
            (<h1>Page Not Found</h1>)
          } */}
        </Container>

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
  head: {
    fontSize: "20px",
    color: "#248f29",
    marginBottom: "60px"
  },
  foot: {
    color: "blue",
    fontFamily: "Times New Roman"
  }
};

export default App;
