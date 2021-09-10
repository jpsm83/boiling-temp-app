import React, { Component } from 'react';

export default class Label extends Component{
  constructor(props){
    super(props);
    this.className = 'plain-label';
  }
 
  render(){
    return (
        <span className={this.className + ` ${this.props.theColor}-label`}>
          {this.props.children} 
        </span>
      )
    }
}