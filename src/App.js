import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div style={{fontFamily: 'Arial'}}>
      <h1 style={styles.items}>hai</h1>
      <h2 className="color-font">Hello</h2>
      <Counter/>
      </div>
    )
  }
}


class Counter extends React.Component{
  state = {
    angka : 0
  }

  tambah = ()=>{
    this.setState({
      angka : this.state.angka + 1
    });
  }

  kurang = ()=>{
    this.setState({
      angka : this.state.angka - 1
    })
  }
  render(){
    return(
      <div>
        <h1>{this.state.angka}</h1>
        <button onClick={this.tambah}>+</button>
        <button onClick={this.kurang}>-</button>
      </div>
    )
  }
}

const styles = {
  items : {
    color: '#4287f5',
    fontSize: '30px'
  }
}
export default App;
