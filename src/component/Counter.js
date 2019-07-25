import React from "react";
import Button from "@material-ui/core/Button";

class Counter extends React.Component {
  state = {
    angka: 0,
    nama: "testing",
    score: [12, 54, 23]
  };

  tambah = () => {
    this.setState({
      angka: this.state.angka + 1
    });
  };

  kurang = () => {
    this.setState({
      angka: this.state.angka - 1
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.angka}</h1>
        <h1>{this.state.nama}</h1>
        <h1>{this.state.score}</h1>
        <Button variant="outlined" color="primary" onClick={this.tambah}>
          +
        </Button>
        <Button variant="contained" color="secondary" onClick={this.kurang}>
          -
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.props.history.goBack()}
        >
          Back
        </Button>
      </div>
    );
  }
}

export default Counter;
