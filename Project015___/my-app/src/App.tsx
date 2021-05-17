import React from 'react';

interface IProps {
  text:String
  title:String
}

interface IState {
  count : number;
}

const updatedComponenet = (SimpleComponenet:any, driver:String) => {
  class NewComponent extends React.Component<IProps, IState>{
    constructor(props:IProps){
      super(props);
      this.state = {
        count : 0
      }
    }

    incrementer = () => {
        this.setState({count : this.state.count + 1});
    }
    render(){
      return(<SimpleComponenet name = {driver} count = {this.state.count} incrementer = {this.incrementer}  {...this.props}/>)
    }
  }
  return NewComponent;
}

export default updatedComponenet;