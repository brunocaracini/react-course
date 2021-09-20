import './App.css';
import React from "react"

/* function HelloWorld(props){
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      <p>{props.mytext}</p>
    </div>
    
  );
} */

class HelloWorld extends React.Component {
  state = {
    show:true
  }

  toogleShow = () =>{
    this.setState({show:!this.state.show});
  }

  render(){
    if (this.state.show){
      return(
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          <p>{this.props.mytext}</p>
          <button onClick={this.toogleShow}>Toogle show</button>
        </div>
      )
    }

    else{
      return(
        <div>
          <h1>Ups! Está en falso.</h1>
          <button onClick={this.toogleShow}>Toogle show</button>
        </div>
        
      )
    }
  }
}

function App() {
  return (
    <div>This is my component: 
      <HelloWorld mytext="Option 1" subtitle="Name:"/>
      <HelloWorld mytext="Option 2"/> 
      <HelloWorld mytext="Option 3"/>
    </div>
  );
}

export default App;
