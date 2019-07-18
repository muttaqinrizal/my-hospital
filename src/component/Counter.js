import React from 'react';
import  Button  from '@material-ui/core/Button';

class Counter extends React.Component {
    state = {
      angka: 0
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
          <Button variant="outlined" color="primary"  onClick={this.tambah}>+</Button>
          <Button variant="contained" color="secondary" disabled onClick={this.kurang}>-</Button>
        
        </div>
      );
    }
  }



export default Counter
