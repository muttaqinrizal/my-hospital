import React from 'react';

// class Kepala extends React.Component{
//     render(){
//       return(
//         <h1>{this.props.name}</h1>
//       )
//     }
// }

function Kepala(props){
  return(
    <div>
    <h1>{props.firstName} {props.lastName}</h1>
    <h1>ini header 2</h1>
    </div>
  )
}


export default Kepala