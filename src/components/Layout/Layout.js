import React, { Component } from 'react';
import './layout.scss';

export default class Layout extends Component {
   state = {
       loading: true,
       people: null
   }

   async componentDidMount() {

   }
   render() {
       return(
            <div className ="Layout">
    
                <div className = "sidebar">

                </div>
                <div className = "not-sidebar">

                </div>
 
            </div>
  
       )
   }
}