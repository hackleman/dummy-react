import React, { Component } from 'react';

const url = 'https://api.randomuser.me/?results=5';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            people: [],
        }

        this.fetchUser = this.fetchUser.bind(this);
    }

    componentDidMount() {

    }

    async fetchUser() {
        this.setState({ loading: true })
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false})
    }

    render() {
        const peopleJSX = 
            this.state.people.map((person, i) => (
                <div key = {person.name.first + person.name.last}>
                    <div>{person.name.title}</div>
                    <div>{person.name.first}</div>
                    <div>{person.name.last}</div>
                    <img src = {person.picture.large} />
                </div>
            ))
        return (
            <div>
                <button onClick = {this.fetchUser}>Get Users</button>
                {
                    ((this.state.loading || !this.state.people) && <div>loading...</div>) ||
                    ((this.state.people && !this.state.loading) && 
                    <div> {peopleJSX} </div>)
                }
            </div>
        )
    }
}