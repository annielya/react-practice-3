import Data from './Data'
import React, { Component } from "react";
import { connect } from 'react-redux'

class App extends Component {

  constructor(props){
    super(props);

  }
  

  renderlist =() => {return this.props.mylist.map( item => {
    return (
      <div className="list-item">
      <img src={item.img}></img>
      <p>{item.title}</p>

      <button onClick={()=>this.props.removeList(item.id, item)}>Remove</button>

      </div>
      )
    })}
  
  renderrecommendation = () => {
    return this.props.recommendation.map( item => {
      return (
        <div className="list-item">
        <img src={item.img}></img>
        <p>{item.title}</p>
        <button onClick={()=>this.props.removeRec(item.id, item)}>Add</button>
        </div>
        )
      })
  }
  
  render(){
    console.log(this.props.mylist)
    return (
      <div className="container">
        <h2>My List</h2>
        <div className="row">{this.renderlist()}</div>
        <h2>Recommendation</h2>
        <div className="row">{this.renderrecommendation()}</div>
      </div>
    )

  }
}



const mapStateToProps=(state)=>{
  return {
    mylist: state.list,
    recommendation: state.recommendation
  }
}

const mapDispatchToProps=(dispatch)=> {
  return {
    removeList: (id, item)=> {
      dispatch({type:"removeList", payload:id});
      dispatch({type:"addList", payload:item})
    },
    removeRec: (id, item)=> {
      dispatch({type:"removeRec", payload:id});
      dispatch({type:"addRec", payload:item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
