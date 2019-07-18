import React from "react";
import Appbar from "../component/Appbar";
import Cards from "../component/Card";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core/Container";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Appbar />

        <img src={require("../asset/RSUD.png")} style={{ width: "100%" }} />
        
        <div style={{display: 'flex', flexDirection:'row'}}>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    );
  }
}
