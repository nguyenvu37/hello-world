import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Hello from './hello';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: ''
    }
  }


  handlerChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

 
  render(){
    // console.log("render");
    return (
      <div className="App">
        <Hello name={this.state.name} handlerChange={this.handlerChange.bind(this)}/>
        <h1>
          Name: {this.state.name} <br/>
          Email: {this.state.email}
        </h1>
      </div>
    );
  }
}


export default App;
