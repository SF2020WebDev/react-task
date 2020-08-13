import React from 'react'

const Counter = (props) => {
    constructor (props) {
        this.setState = {(
            count: 0
        )};

    increase() {
        this.setState = {(
            count: this.state.count + 1
        )};

    decrease() {
        this.setState = {(
            count: this.state.count -1
        )};
    }

    

    return (
        <div>
            <button className='increase' onClick={(e) => this.increase(e)}> Increase </button>
            <button className='decrease' onClick={(e) => this.decrease(e)}> Decrease </button>
        </div>
    )

