import React, { Component } from 'react';

export default class Fetch extends Component {
   state = {
       loading: true,
       people: null
   }

   async componentDidMount() {
       const url = 'https://api.randomuser.me/?results=5';
       const response = await fetch(url);
       
       const data = await response.json();
       this.setState({ people: data.results, loading: false })
       console.log(data);
   }
   
    render() {
        return (
            <div>
            
            {((this.state.loading ) &&  (<div>loading...</div> )) ||
            this.state.people.map(person => (
                ((!this.state.loading) && ( 
                    <div>
                        <div>{person.name.first}</div>
                        <div>{person.name.last}</div>
                        <img src = {person.picture.large} />
                    </div>
            ))
            ))}
            </div>
        )
    }
}