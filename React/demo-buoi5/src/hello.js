import React from 'react';
class Hello extends React.Component {
  constructor(){
    super();
    console.log("constructor Hello");
   
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <FormData handlerChange={this.props.handlerChange}/>
      </div>
    );
  }
}


export default Hello;
